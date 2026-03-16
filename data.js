var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.039430133739713824,
        "pitch": -0.0018561726291146385,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.029755258215809377,
          "pitch": 0.2712004435828437,
          "rotation": 0,
          "target": "1-workspace"
        },
        {
          "yaw": 1.583599906201595,
          "pitch": 0.2366994873851489,
          "rotation": 0,
          "target": "4-kitchenette"
        },
        {
          "yaw": 0.9414834526314948,
          "pitch": 0.16441755648783918,
          "rotation": 0,
          "target": "3-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-workspace",
      "name": "Workspace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.084089746220041,
          "pitch": 0.33412227460915034,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.757625331157378,
          "pitch": 0.24035054783280252,
          "rotation": 0,
          "target": "2-main-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-office",
      "name": "Main Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.377312047320647,
          "pitch": 0.22104047812522154,
          "rotation": 0,
          "target": "1-workspace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-meeting-room",
      "name": "Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.349964837538689,
          "pitch": 0.25806505439306804,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchenette",
      "name": "Kitchenette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.936257612722123,
          "pitch": 0.3481488584680097,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Plateau Bureau",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
