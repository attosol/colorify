'use strict';

const COLOR_SETTINGS = Object.freeze([
  {
    "name": "violet_blue_crayola",
    "things": {
      "activityBar.background": "#6369D1",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "dark_sienna",
    "things": {
      "activityBar.background": "#4C061D",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "baby_blue",
    "things": {
      "activityBar.background": "#6CD4FF",
      "activityBar.foreground": "#18006d",
      "activityBar.inactiveForeground": "#18006d55",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "platinum",
    "things": {
      "activityBar.background": "#EAEAEA",
      "activityBar.foreground": "#242424",
      "activityBar.inactiveForeground": "#24242477",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "gold_crayola",
    "things": {
      "activityBar.background": "#F2C57C",
      "activityBar.foreground": "#494b44",
      "activityBar.inactiveForeground": "#494b4477",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "light_coral",
    "things": {
      "activityBar.background": "#EF6F6C",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "hookers_green",
    "things": {
      "activityBar.background": "#426A5A",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "dark_sea_green",
    "things": {
      "activityBar.background": "#7FB685",
      "activityBar.foreground": "#103006",
      "activityBar.inactiveForeground": "#10300677",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "fawn",
    "things": {
      "activityBar.background": "#DDAE7E",
      "activityBar.foreground": "#292302",
      "activityBar.inactiveForeground": "#29230277",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "amaranth_purple",
    "things": {
      "activityBar.background": "#B6244F",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "light_pink",
    "things": {
      "activityBar.background": "#FBB7C0",
      "activityBar.foreground": "#7e0774",
      "activityBar.inactiveForeground": "#7e077477",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "antique_brass",
    "things": {
      "activityBar.background": "#B89685",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "dark_liver",
    "things": {
      "activityBar.background": "#504746",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "fern_green",
    "things": {
      "activityBar.background": "#607744",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "hunter_green",
    "things": {
      "activityBar.background": "#34623F",
      "activityBar.foreground": "#F1FAEE",
      "activityBar.inactiveForeground": "#F1FAEE77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "dark_sky_blue",
    "things": {
      "activityBar.background": "#7FB7BE",
      "activityBar.foreground": "#00054b",
      "activityBar.inactiveForeground": "#00054b77",
      "activityBarBadge.background": "#bf0060",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  },
  {
    "name": "uranian_blue",
    "things": {
      "activityBar.background": "#005994",
      "activityBar.foreground": "#d8d8d8",
      "activityBar.inactiveForeground": "#d8d8d877",
      "activityBarBadge.background": "#dd006f",
      "activityBarBadge.foreground": "#e7e7e7"
    }
  }
]);

module.exports = COLOR_SETTINGS;