#!/usr/bin/env python

import csv
import json

file = "sample_data_maps.txt"

reader = csv.reader(open((file), 'r'), delimiter=',');

keys = ("LocationID", "Suburb", "State", "Postcode", "Latitude", "Longitude")

all = []
for row in reader:
    row = iter(row)
    data = {}
    for key in keys:
        data[key] = row.next()
    all += [data]
print json.dumps(all)
