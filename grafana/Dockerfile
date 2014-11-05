FROM busybox:buildroot-2014.02

ADD grafana-1.8.1.tar.gz /
RUN mv /grafana-1.8.1 /grafana
ADD config.js /grafana/

VOLUME /grafana

CMD ["/bin/sh"]
