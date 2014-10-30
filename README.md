Mega metrik
=====

Docker Global Hack Day #2

Launch InfluxDB, Grafana and nginx with fig.

## TODO
* nginx reverse proxy for grafana javascript app (running in browser) to influxdb in container
* influxdb: don't bind 8086 to 8086 on host (influxdb web interface 8083 stops working then -> fix this)
* fix grafanafiles volume-container. is this the right way? base it off busybox?
* authentication influxdb (root/root for now) and grafana-nginx (none for now)
* pre-populate influxdb with some data for demo purposes
* show end2end use case: add metrics with curl, show graph
* present result: video, demo, ...

### Stretch goals
* maybe add dashing dashboard or something
* maybe add stream processing infront of influxdb such as rieman?
* maybe use seperate influxdb container for grafana dashboard store
* maybe pre-configure grafana dashboard with something more useful
