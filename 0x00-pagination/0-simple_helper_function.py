#!/usr/bin/env python3
"""
Module that contains the function index_range()
"""


def index_range(page: int, page_size: int) -> tuple:
    """

    Args:
       page(int):
       page_size(int):

    Returns:
         A tuple of size two containing a start index and an end index
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
