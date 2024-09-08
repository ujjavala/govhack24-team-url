#!/usr/bin/python3

"""
Utility Functions for Data Exploration in Jupyter Noterbooks
"""

import pandas as pd
from itertools import product


def df_overview(df: pd.DataFrame) -> pd.DataFrame:
    """
    Creates an overview of the data columns in the dataframe
    """

    if not isinstance(df, pd.DataFrame):
        raise Exception("Input is not of type 'pandas.DataFrame'!")

    dtypes = df.dtypes  # data type of column
    unique_values = df.nunique()
    null_values = df.isnull().sum()
    non_null_values = df.notnull().sum()

    overview = pd.concat(
        [dtypes, unique_values, non_null_values, null_values],
        axis=1,
        keys=["type", "uniques_values", "non_null_values", "null_values"],
    )
    overview["null_value_pct"] = round(overview.null_values / len(df) * 100, 2)

    overview = overview.reset_index()
    overview = overview.rename(columns={"index": "column_label"})

    return overview