#!/usr/bin/env python

import requests
import json
import random
import time

url = "http://104.131.170.131/db/metrics/series"
params = {'u': 'root', 'p': 'root'}

while True:
    metric = random.randint(0, 100)
    print(metric)
    payload = [{'name': 'foo', 'columns': ['val'], 'points': [[metric]]}]

    requests.post(url, json=payload, params=params)
    time.sleep(10)
