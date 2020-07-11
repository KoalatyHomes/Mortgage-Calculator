#!/bin/bash

createdb mortgage

psql -d mortgage -f schema.sql
