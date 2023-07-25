#!/usr/bin/env python3
"""
FIFOCache Module
"""
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """FIFO Algorithm
    """

    def __init__(self):
        """Initialization
        """
        super().__init__()

    def put(self, key, item):
        """
         Assign to the self.cache_data the 'item' value for the key 'key'
        """
        if len(self.cache_data) > BaseCaching.MAX_ITEMS - 1:
            first_key = next(iter(self.cache_data))
            del self.cache_data[first_key]
            print(f'DISCARD: {first_key}')
        if (key and item):
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
