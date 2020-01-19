#!/bin/sh
#tsc $1
tsc --target ES2016 $1

filename=`echo $1 | awk -F'.' '{print $1}'`
cp ${filename}.html ${filename}.js windows
