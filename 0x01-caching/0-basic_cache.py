#!/usr/bin/env python3
"""
BasicCache Module
"""
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """Caching System
    """

    def __init__(self):
        """Initialize
        """
        super().__init__()

    def put(self, key, item):
        """
        Assign to the self.cache_data the 'item' value for the key 'key'
        """
        if (key or item):
            self.cache_data[key] = item

    def get(self, key):
        """
        Returns the value in self.cache_data linked to key
        """
        try:
            data = self.cache_data[key]
            return data
        except Exception:
            return None
