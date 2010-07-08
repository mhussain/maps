#!/usr/bin/env python

import csv

file = "sample_data_maps.txt"

reader = csv.reader(open((file), 'r'), delimiter=',');

keys = ("Suburb", "Postcode", "Longitude", "Latitude")

json = []
for row in reader:
    row = iter(row)
    data = {}
    for key in keys:
        data[key] = row.next()
    json += [data]
print json
