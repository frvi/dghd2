FROM debian:jessie

ADD http://grafanarel.s3.amazonaws.com/grafana-1.8.1.tar.gz /grafana.tar.gz
RUN tar xzf /grafana.tar.gz && \
    rm /grafana.tar.gz && \
    mv /grafana-1.8.1 /grafana
ADD config.js /grafana/

VOLUME /grafana

CMD ["/bin/sh"]
