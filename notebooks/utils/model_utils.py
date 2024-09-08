import pandas as pd
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
from sklearn.model_selection import KFold
from scipy.stats import sem
from typing import List

N_SPLITS = 10
RANDOM_STATE = 66


def k_fold_cv_results(
    model_train_and_predict,
    X: pd.DataFrame,
    Y: pd.DataFrame,
    target_var: str,
    n_splits: int = N_SPLITS,
    random_state: int = RANDOM_STATE,
    in_sample_train_pred: bool = False,
) -> pd.DataFrame:
    """
    Apply K-fold cross validation model training on given dataset with fixed random
    state/seed so that results can be comparable between different model approaches.

    :param model_train_and_predict: model wrapper that takes in training and testing
                                    data and returns training and testing predictions
    :param X: whole feature data
    :param Y: whole target data
    :param target_var: target variable column name
    :param n_splits: number of folds to cross validate on
    :param random_state: random state/seed to fix on
    :param in_sample_train_pred: whether to return in sample training predictions across
                                 all folds
    :return: dataframe of model results across all folds and if required in sample
             training predictions across all folds
    """
    cv_scores = {
        "model_train_rmse": [],
        "model_test_rmse": [],
        "model_train_mae": [],
        "model_test_mae": [],
        "model_train_r2": [],
        "model_test_r2": [],
    }

    list_in_sample = []

    kf = KFold(n_splits=n_splits, shuffle=True, random_state=random_state)

    for train_index, test_index in kf.split(range(Y.shape[0])):

        X_train_tmp, X_test_tmp = X.iloc[train_index], X.iloc[test_index]
        Y_train_tmp, Y_test_tmp = Y.iloc[train_index], Y.iloc[test_index]

        prediction_train_tmp, prediction_test_tmp = model_train_and_predict(
            X_train_tmp, X_test_tmp, Y_train_tmp, Y_test_tmp
        )

        cv_scores["model_train_rmse"].append(
            mean_squared_error(
                Y_train_tmp[target_var], prediction_train_tmp, squared=False
            )
        )
        cv_scores["model_test_rmse"].append(
            mean_squared_error(
                Y_test_tmp[target_var], prediction_test_tmp, squared=False
            )
        )
        cv_scores["model_train_mae"].append(
            mean_absolute_error(Y_train_tmp[target_var], prediction_train_tmp)
        )
        cv_scores["model_test_mae"].append(
            mean_absolute_error(Y_test_tmp[target_var], prediction_test_tmp)
        )
        cv_scores["model_train_r2"].append(
            r2_score(Y_train_tmp[target_var], prediction_train_tmp)
        )
        cv_scores["model_test_r2"].append(
            r2_score(Y_test_tmp[target_var], prediction_test_tmp)
        )

        if in_sample_train_pred:
            list_in_sample.append(prediction_train_tmp)

    if in_sample_train_pred:
        return pd.DataFrame(cv_scores), list_in_sample, cv_scores
    else:
        return pd.DataFrame(cv_scores)


def model_result_summary(
    df_cv_scores: pd.DataFrame, n_fold: int, model_name: str, metrics: List[str]
):
    """
    Print out summary of model results across all folds of cross validation for selected
    metrics.

    :param df_cv_scores: dataframe of model results across all folds
    :param n_fold: number of folds cross validation was on
    :param model_name: modeling approach name to print by
    :param metrics: metrics need to be summarized
    """
    summary = model_name + " for ER with {}-fold CV results in:"
    tuple_format = [n_fold]
    for metric in metrics:
        summary += "\nTest " + metric + " of {:.5f} with standard error of {:.5f}."
        tuple_format += [
            df_cv_scores["model_test_" + metric].mean(),
            sem(df_cv_scores["model_test_" + metric]),
        ]
    print(summary.format(*tuple_format))


def model_result_comparison(
    list_model_names: List[str],
    list_model_results: List[pd.DataFrame],
    metrics: List[str],
) -> pd.DataFrame:
    """
    Summarize modeling results for different modeling approaches for certain metrics and
    save them in a dataframe for easy comparisomn.

    :param list_model_names: modeling approach names to be saved in the dataframe
    :param list_model_results: dataframes of model results
    :param metrics: metrics need to be summarized
    :return: dataframe with result summaries for metrics specified across all modeling
             approaches
    """
    list_result_df = []
    for i, j in zip(list_model_names, list_model_results):
        model_result = [i]
        for k in metrics:
            model_result += [j["model_test_" + k].mean(), sem(j["model_test_" + k])]
        list_result_df.append(model_result)

    result_cols = ["modeling_approch"]
    for l in metrics:
        result_cols += [l + "_mean", l + "_standard_error"]

    df_results_overview = pd.DataFrame(list_result_df, columns=result_cols)

    return df_results_overview