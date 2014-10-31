define(['settings'],
function (Settings) {

  return new Settings({

    // InfluxDB

    datasources: {
      influxdb: {
        type: 'influxdb',
       // url: "http://influxdb:8086/db/metrics",
        url: "http://104.131.170.131:8086/db/metrics",
        username: 'root',
        password: 'root',
      },
      grafana: {
        type: 'influxdb',
        //url: "http://influxdb:8086/db/grafana",
        url: "http://104.131.170.131:8086/db/metrics",
        username: 'root',
        password: 'root',
        grafanaDB: true
      },
    },

    // Global 

    // specify the limit for dashboard search results
    search: {
      max_results: 20
    },

    // default home dashboard
    default_route: '/dashboard/file/default.json',

    // set to false to disable unsaved changes warning
    unsaved_changes_warning: true,

    // set the default timespan for the playlist feature
    // Example: "1m", "1h"
    playlist_timespan: "1m",

    // If you want to specify password before saving, please specify it bellow
    // The purpose of this password is not security, but to stop some users from accidentally changing dashboards
    admin: {
      password: 'admin'
    },

    // Change window title prefix from 'Grafana - <dashboard title>'
    window_title_prefix: 'Grafana - ',

    // Add your own custom panels
    plugins: {
      // list of plugin panels
      panels: [],
      // requirejs modules in plugins folder that should be loaded
      // for example custom datasources
      dependencies: [],
    }

  });
});

