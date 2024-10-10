const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

const todos = [
  {
      "description": "todo description 111",
      "title": "todo 1",
      "updated_at": "2024-09-11T23:06:12.792Z"
  },
  {
      "description": "todo description 111",
      "title": "todo 1",
      "updated_at": "2024-08-18T07:56:45.414Z"
  },
  {
      "description": "TITI",
      "title": "TITI",
      "updated_at": "2024-08-18T08:01:56.456Z"
  },
  {
      "description": "todo description 111",
      "title": "Edit todo 1",
      "updated_at": "2024-08-23T15:05:05.532Z"
  },
  {
      "description": "todo description 111",
      "title": "Edit todo 1",
      "updated_at": "2024-08-23T15:05:07.861Z"
  },
  {
      "description": "todo description 111",
      "title": "Edit todo s1",
      "updated_at": "2024-08-23T15:05:23.682Z"
  },
  {
      "description": "testwp 4",
      "title": "test4",
      "updated_at": "2024-08-30T12:02:03.726Z"
  },
  {
      "complete": false,
      "created_at": "2024-08-30T14:25:13.608Z",
      "created_by": {
          "id": "-O5YNIf1_3wmDbvyYJ0r",
          "username": "abosszz"
      },
      "description": "",
      "editStatus": false,
      "popupStatus": false,
      "title": "test",
      "updated_at": "2024-08-30T14:25:13.608Z"
  },
  {
      "complete": false,
      "created_at": "2024-08-30T14:31:59.676Z",
      "created_by": {
          "id": "-O5YNIf1_3wmDbvyYJ0r",
          "username": "abosszz"
      },
      "description": "",
      "editStatus": false,
      "popupStatus": false,
      "title": "boss test 2",
      "updated_at": "2024-08-30T14:31:59.676Z"
  },
  {
      "complete": false,
      "created_at": "2024-08-30T14:35:24.635Z",
      "created_by": {
          "id": "-O5YNIf1_3wmDbvyYJ0r",
          "username": "abosszz"
      },
      "description": "",
      "editStatus": false,
      "popupStatus": false,
      "title": "testtt",
      "updated_at": "2024-08-30T14:35:24.635Z"
  },
  {
      "created_at": "2024-09-05T07:36:28.227Z",
      "created_by": {
          "id": "-O6-jGjpqs7TavZc_L1x",
          "username": "aecuto"
      },
      "description": "testdwadwa",
      "id": "-O606EozH2fZ1NcC038a",
      "title": "testwqsedqwa",
      "updated_at": "2024-10-08T16:59:30.023Z"
  },
  {
      "created_at": "2024-09-06T13:28:10.396Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wadwadwa",
      "id": "-O66WKTNqc7Ai7BDcaHz",
      "title": "dwadwad",
      "updated_at": "2024-09-06T13:28:10.396Z"
  },
  {
      "created_at": "2024-09-06T13:30:06.692Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "xxxxxxxxxxa",
      "id": "-O66WlrVO8gYNwiTsG-h",
      "title": "wsadddda",
      "updated_at": "2024-09-06T13:30:06.692Z"
  },
  {
      "created_at": "2024-09-06T13:31:57.154Z",
      "created_by": {
          "id": "-O66X786-a5NMawCD1P7",
          "username": "xxxx"
      },
      "description": "wadwad",
      "id": "-O66XBpT5BKqBWKIvkhU",
      "title": "dwaddwad",
      "updated_at": "2024-09-06T13:31:57.154Z"
  },
  {
      "created_at": "2024-09-06T13:31:59.596Z",
      "created_by": {
          "id": "-O66X786-a5NMawCD1P7",
          "username": "xxxx"
      },
      "description": "adwad",
      "id": "-O66XCQcSaEp6JnY_BcS",
      "title": "dwadw",
      "updated_at": "2024-09-06T13:31:59.596Z"
  },
  {
      "created_at": "2024-09-06T13:32:02.258Z",
      "created_by": {
          "id": "-O66X786-a5NMawCD1P7",
          "username": "xxxx"
      },
      "description": "dwadaw",
      "id": "-O66XD4DRBFUIiqzPFU4",
      "title": "dwadwa",
      "updated_at": "2024-09-06T13:32:02.258Z"
  },
  {
      "created_at": "2024-09-06T13:32:09.212Z",
      "created_by": {
          "id": "-O66X786-a5NMawCD1P7",
          "username": "xxxx"
      },
      "description": "afgvwadfwa",
      "id": "-O66XElszCPxDTgR0qeg",
      "title": "dwadw",
      "updated_at": "2024-09-06T13:32:09.212Z"
  },
  {
      "created_at": "2024-09-06T13:32:12.410Z",
      "created_by": {
          "id": "-O66X786-a5NMawCD1P7",
          "username": "xxxx"
      },
      "description": "wfwfwfwfaf",
      "id": "-O66XFYq6wYXBRHick8B",
      "title": "xwsadwf",
      "updated_at": "2024-09-06T13:32:12.410Z"
  },
  {
      "created_at": "2024-09-07T05:43:19.268Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wadwa",
      "id": "-O6A-Wqhvgty0xcH0JeA",
      "title": "awdad",
      "updated_at": "2024-09-07T05:43:19.268Z"
  },
  {
      "created_at": "2024-09-09T05:41:36.131Z",
      "created_by": {
          "id": "-O6KI3u7VWmdlKMY_kFa",
          "username": "axa"
      },
      "description": "xxxxxxx",
      "id": "-O6KIJB-TLHSQRrxDyt8",
      "title": "xxxxxx",
      "updated_at": "2024-09-09T05:41:36.131Z"
  },
  {
      "created_at": "2024-09-09T22:18:15.482Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "awsdad",
      "id": "-O6NrQbnWu_EDCA7ZXnm",
      "title": "adwsd",
      "updated_at": "2024-09-09T22:18:15.482Z"
  },
  {
      "created_at": "2024-09-09T22:18:18.381Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "wadfwa",
      "id": "-O6NrRK5cOmB8xcSBc21",
      "title": "dwsaf",
      "updated_at": "2024-09-09T22:18:18.381Z"
  },
  {
      "created_at": "2024-09-09T22:18:23.432Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "afwafw",
      "id": "-O6NrSZ0lbPBD_abBmKB",
      "title": "wfafw",
      "updated_at": "2024-09-09T22:18:23.432Z"
  },
  {
      "created_at": "2024-09-09T22:18:38.748Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "afwafwa",
      "id": "-O6NrWIKRFL1SuAxKmkz",
      "title": "fgwadfw",
      "updated_at": "2024-09-09T22:18:38.748Z"
  },
  {
      "created_at": "2024-09-09T22:18:44.006Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "wsxxawsxwas",
      "id": "-O6NrX_UOLZCGTS8G5bz",
      "title": "xwsadwsad",
      "updated_at": "2024-09-09T22:18:44.006Z"
  },
  {
      "created_at": "2024-09-09T22:18:51.282Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "wadwa",
      "id": "-O6NrZMAs7WrQsq_Dg5Y",
      "title": "aqdwasd",
      "updated_at": "2024-09-09T22:18:51.282Z"
  },
  {
      "created_at": "2024-09-09T22:20:04.106Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "wadwdwad",
      "id": "-O6Nrq82RpR29X_BvfxW",
      "title": "fgwad",
      "updated_at": "2024-09-09T22:20:04.106Z"
  },
  {
      "created_at": "2024-09-09T22:20:07.475Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "afwafwa",
      "id": "-O6NrqxgxkJhocEz4RiM",
      "title": "fwafw",
      "updated_at": "2024-09-09T22:20:07.475Z"
  },
  {
      "created_at": "2024-09-09T22:20:10.431Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "awdwad",
      "id": "-O6Nrrfs5hWEQ-cbQoXV",
      "title": "gfwad",
      "updated_at": "2024-09-09T22:20:10.431Z"
  },
  {
      "created_at": "2024-09-09T22:20:19.250Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "dawdawdw",
      "id": "-O6NrtpfDYDPcQYqYojB",
      "title": "dwafwa",
      "updated_at": "2024-09-09T22:20:19.250Z"
  },
  {
      "created_at": "2024-09-09T22:20:22.580Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "fwafwafwf",
      "id": "-O6Nrudh7c78MzlGG8ii",
      "title": "fwafwa",
      "updated_at": "2024-09-09T22:20:22.580Z"
  },
  {
      "created_at": "2024-09-09T22:20:29.973Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "dwadwsa",
      "id": "-O6NrwSD_bFVkTm__WAT",
      "title": "fwadwa",
      "updated_at": "2024-09-09T22:20:29.973Z"
  },
  {
      "created_at": "2024-09-09T22:20:38.538Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "dwadwad",
      "id": "-O6NryY2OcOy7wsgA3PY",
      "title": "dwadwad",
      "updated_at": "2024-09-09T22:20:38.538Z"
  },
  {
      "created_at": "2024-09-09T22:20:46.087Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "fwafwafw",
      "id": "-O6Ns-O-NTgBVLA9D_ln",
      "title": "fwafwa",
      "updated_at": "2024-09-09T22:20:46.087Z"
  },
  {
      "created_at": "2024-09-09T22:21:17.592Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "afwafwa",
      "id": "-O6Ns74GlwYGtPLfuixG",
      "title": "fwafw",
      "updated_at": "2024-09-09T22:21:17.592Z"
  },
  {
      "created_at": "2024-09-09T22:21:21.189Z",
      "created_by": {
          "id": "-O6NrPEm63AB3oEZHvhk",
          "username": "xasw"
      },
      "description": "fwafwaf",
      "id": "-O6Ns7xTXPCRnI6E9__p",
      "title": "wfafwa",
      "updated_at": "2024-09-09T22:21:21.189Z"
  },
  {
      "created_at": "2024-09-09T22:25:00.606Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "adwada",
      "id": "-O6NsyWryk7UUY4cjhb2",
      "title": "asdawd",
      "updated_at": "2024-09-09T22:25:00.606Z"
  },
  {
      "created_at": "2024-09-10T17:03:33.468Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wadwadwadaw",
      "id": "-O6RszVKB6MDIk4DYSci",
      "title": "dwadwad",
      "updated_at": "2024-09-10T17:03:33.468Z"
  },
  {
      "created_at": "2024-09-11T02:23:22.061Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "adwadwa",
      "id": "-O6Tt6q5xtyZEJmxa2kd",
      "title": "wadwadw",
      "updated_at": "2024-09-11T02:23:22.061Z"
  },
  {
      "created_at": "2024-09-11T02:23:25.558Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "xaxaw",
      "id": "-O6Tt7gjOhNAoy0CPcyo",
      "title": "xwaxaw",
      "updated_at": "2024-09-11T02:23:25.558Z"
  },
  {
      "created_at": "2024-09-11T02:23:30.325Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "awxawxwax",
      "id": "-O6Tt8rDuxuub-HGz0uJ",
      "title": "xawsdx",
      "updated_at": "2024-09-11T02:23:30.325Z"
  },
  {
      "created_at": "2024-09-12T01:09:14.092Z",
      "created_by": {
          "id": "-O6R9fwkH9jiz7AkR89A",
          "username": "mojoe1"
      },
      "description": "Wiki software (also known as a wiki engine or a wiki application) is collaborative software that runs a wiki, which allows the users to create and collaboratively edit pages or entries via a web browser. A wiki system is usually a web application that runs on one or more web servers. The content, including previous revisions, is usually stored in either a file system or a database. Wikis are a type of web content management system, and the most commonly supported off-the-shelf software that web",
      "due_date": "2024-09-26T17:00:00.000Z",
      "id": "-O6YljffPRoz881cMSJK",
      "is_done": false,
      "title": "วิกิซอฟต์แวร์ (Wiki software) เป็นซอฟต์แวร์เพื่อความร่วมมือชนิดหนึ่งบนระบบ วิกิ โดยประมวลผลบน เว็บเซิร์ฟเวอร์ การจัดเก็บเนื้อหาจะเกี่ยวข้องกับระบบการจัดการความสัมพันธ์ของฐานข้อมูล แม้ว่าบางครั้งการใช้เครื่องมือจะถูกจัดเก็บในรูปของไฟล์แทน",
      "updated_at": "2024-09-12T07:35:40.574Z"
  },
  {
      "created_at": "2024-09-12T03:28:36.875Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "adwad",
      "id": "-O6ZGdN81VnDKiTLKCZB",
      "title": "dweadw",
      "updated_at": "2024-09-12T03:28:36.875Z"
  },
  {
      "created_at": "2024-09-12T03:28:41.248Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "adwadwa",
      "id": "-O6ZGeRUIVTmotyY5297",
      "title": "dwadwdwad",
      "updated_at": "2024-09-12T03:28:41.248Z"
  },
  {
      "created_at": "2024-09-12T03:29:03.189Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wadwa",
      "id": "-O6ZGjnJYI6FI7TrnuvY",
      "title": "awdwad",
      "updated_at": "2024-09-12T03:29:03.189Z"
  },
  {
      "created_at": "2024-09-12T03:29:06.389Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wadwsa",
      "id": "-O6ZGk_JPtBJp5z4Okt9",
      "title": "wadwad",
      "updated_at": "2024-09-12T03:29:06.389Z"
  },
  {
      "created_at": "2024-09-12T03:29:10.773Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "dwaddwad",
      "id": "-O6ZGldo0N1VM6wc8w5j",
      "title": "dwadwa",
      "updated_at": "2024-09-23T06:25:04.918Z"
  },
  {
      "created_at": "2024-09-12T03:42:50.203Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "dwadwa",
      "id": "-O6ZJthPO3lhJeEBeIID",
      "title": "dwadwa",
      "updated_at": "2024-09-12T03:42:50.203Z"
  },
  {
      "created_at": "2024-09-12T07:37:11.619Z",
      "created_by": {
          "id": "-O6R9fwkH9jiz7AkR89A",
          "username": "mojoe1"
      },
      "description": "ทำตาม requirement ครับ",
      "due_date": "2024-09-20T08:00:00.000Z",
      "id": "-O6_9Xf1K1Ozw-gzdSy6",
      "is_done": true,
      "title": "ทำ testfrontend test hi",
      "updated_at": "2024-09-12T09:54:16.698Z"
  },
  {
      "created_at": "2024-09-12T11:56:38.518Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "admin",
      "id": "-O6a4vApsu3n6uUR8xhR",
      "title": "admin",
      "updated_at": "2024-09-12T11:56:38.518Z"
  },
  {
      "created_at": "2024-09-18T14:16:10.155Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "awdwa",
      "id": "-O74UOWt2oInXvp4BKT2",
      "title": "wdadwd",
      "updated_at": "2024-09-18T14:16:10.155Z"
  },
  {
      "created_at": "2024-09-19T14:24:50.866Z",
      "created_by": {
          "id": "-O79MqJCAt1I2Dp0nho3",
          "username": "cc.chinathip@gmail.com"
      },
      "description": "Todo description",
      "id": "-O79eyPjy02hfj-PXQqJ",
      "title": "Todo 12",
      "updated_at": "2024-09-19T14:24:50.866Z"
  },
  {
      "created_at": "2024-09-19T15:36:28.511Z",
      "created_by": {
          "id": "-O79MqJCAt1I2Dp0nho3",
          "username": "cc.chinathip@gmail.com"
      },
      "description": "check plan",
      "id": "-O79vMcZvZOYe6F_OSJl",
      "title": "check plan",
      "updated_at": "2024-09-19T15:36:39.286Z"
  },
  {
      "created_at": "2024-09-22T17:31:41.505Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "adwadwadwa",
      "id": "-O7PmVbxze2iMAixHLRU",
      "title": "dwadwadw",
      "updated_at": "2024-09-22T17:31:41.505Z"
  },
  {
      "created_at": "2024-09-22T17:31:44.789Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "wadwadwad",
      "id": "-O7PmWQG4J8Y6BAKJC2p",
      "title": "wadwad",
      "updated_at": "2024-09-22T17:31:44.789Z"
  },
  {
      "created_at": "2024-09-22T17:31:48.420Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "dwadwadwasd",
      "id": "-O7PmXJ-cMs9-jnyFi0B",
      "title": "dwafwadaw",
      "updated_at": "2024-09-22T17:31:48.420Z"
  },
  {
      "created_at": "2024-09-22T17:31:51.646Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "wadwadwa",
      "id": "-O7PmY5PXBoO-jPpE2xF",
      "title": "dadwad",
      "updated_at": "2024-09-22T17:31:51.646Z"
  },
  {
      "created_at": "2024-09-22T17:31:54.790Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "adwadawd",
      "id": "-O7PmYrXnOiW3cftSHWZ",
      "title": "adwadw",
      "updated_at": "2024-09-22T17:31:54.790Z"
  },
  {
      "created_at": "2024-09-22T17:31:58.890Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "dawdwadwa",
      "id": "-O7PmZra5EHtcLZVV_qw",
      "title": "dawdwa",
      "updated_at": "2024-09-22T17:31:58.890Z"
  },
  {
      "created_at": "2024-09-22T17:32:02.203Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "wadwa",
      "id": "-O7Pm_fMu9bu5EK9GNQu",
      "title": "wdadwad",
      "updated_at": "2024-09-22T17:32:02.203Z"
  },
  {
      "created_at": "2024-09-22T17:32:06.983Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "wadwadwa",
      "id": "-O7Pmaq2XBZbBMWJ9q2S",
      "title": "dwaddwadwa",
      "updated_at": "2024-09-22T17:32:06.983Z"
  },
  {
      "created_at": "2024-09-22T17:32:40.498Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "dwadwad",
      "id": "-O7Pmj0iXKq-kcnmSxSM",
      "title": "dwadwa",
      "updated_at": "2024-09-22T17:32:40.498Z"
  },
  {
      "created_at": "2024-09-22T17:32:43.913Z",
      "created_by": {
          "id": "-O7PmQ_lS_0MDgjiHKSO",
          "username": "wawdadwa"
      },
      "description": "wadadwa",
      "id": "-O7Pmjr3YfnY33EyCiHT",
      "title": "wdwadwad",
      "updated_at": "2024-09-22T17:32:43.913Z"
  },
  {
      "created_at": "2024-09-24T13:35:39.823Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wadwadwadwa",
      "id": "-O7ZEeffh9LmvuV18VPL",
      "title": "dwadwad",
      "updated_at": "2024-09-24T13:35:39.823Z"
  },
  {
      "created_at": "2024-09-24T13:35:44.326Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "dwadwadwadwa",
      "id": "-O7ZEfm1O8xBnl_OFiEv",
      "title": "dwadwa",
      "updated_at": "2024-09-24T13:35:44.326Z"
  },
  {
      "created_at": "2024-09-26T12:31:43.532Z",
      "created_by": {
          "id": "-O7dWr7IIB-9CHUN7_Qn",
          "username": "bright-natchanon"
      },
      "description": "ccc",
      "id": "-O7iJCaeDu1qnKtSrcwU",
      "title": "aaa",
      "updated_at": "2024-09-26T12:31:43.532Z"
  },
  {
      "created_at": "2024-09-26T12:32:50.810Z",
      "created_by": {
          "id": "-O7dWr7IIB-9CHUN7_Qn",
          "username": "bright-natchanon"
      },
      "description": "ccc",
      "id": "-O7iJT0shoYGaEafVIQg",
      "title": "aaa",
      "updated_at": "2024-09-26T12:32:50.810Z"
  },
  {
      "created_at": "2024-09-26T14:45:11.580Z",
      "created_by": {
          "id": "-O7imi00-EhvKCJuZXQ-",
          "username": "dwadwa"
      },
      "description": "adwadwadw",
      "id": "-O7imkgPAJTY69MnP5Rv",
      "title": "adwadw",
      "updated_at": "2024-09-26T14:45:11.580Z"
  },
  {
      "created_at": "2024-09-26T14:45:14.586Z",
      "created_by": {
          "id": "-O7imi00-EhvKCJuZXQ-",
          "username": "dwadwa"
      },
      "description": "wadwadwa",
      "id": "-O7imlQNhW_fUlMWYoeO",
      "title": "dwadwad",
      "updated_at": "2024-09-26T14:45:14.586Z"
  },
  {
      "created_at": "2024-09-26T18:16:58.794Z",
      "created_by": {
          "id": "-O7dWr7IIB-9CHUN7_Qn",
          "username": "bright-natchanon"
      },
      "description": "aaa",
      "id": "-O7jYE1bNrOpnmzPFaty",
      "title": "aa",
      "updated_at": "2024-09-26T18:16:58.794Z"
  },
  {
      "created_at": "2024-10-01T00:48:34.288Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "dwadwa",
      "id": "-O84YDEir65RedbC0rJD",
      "title": "wedawa",
      "updated_at": "2024-10-01T00:48:34.288Z"
  },
  {
      "created_at": "2024-10-01T00:48:37.184Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "wadwa",
      "id": "-O84YDwysIvTnQgnsOMp",
      "title": "dwadwa",
      "updated_at": "2024-10-01T00:48:37.184Z"
  },
  {
      "created_at": "2024-10-01T00:48:42.734Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "wadwadw",
      "id": "-O84YFIgRiM__VfAoZuO",
      "title": "dwaddwa",
      "updated_at": "2024-10-01T00:48:42.734Z"
  },
  {
      "created_at": "2024-10-01T00:48:46.301Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "wadwa",
      "id": "-O84YGAQG3B4L-vdKaUo",
      "title": "dwaddwa",
      "updated_at": "2024-10-01T00:48:46.301Z"
  },
  {
      "created_at": "2024-10-01T00:48:49.328Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "dwadwad",
      "id": "-O84YGuiLyEaZnCJr2UW",
      "title": "dwadwa",
      "updated_at": "2024-10-01T00:48:49.328Z"
  },
  {
      "created_at": "2024-10-01T00:48:53.105Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "adwadwad",
      "id": "-O84YHpjeCER4x8myCXZ",
      "title": "dwawdw",
      "updated_at": "2024-10-01T00:48:53.105Z"
  },
  {
      "created_at": "2024-10-01T00:48:56.341Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "wadwadaw",
      "id": "-O84YIcIItQlMkLdUMwK",
      "title": "dwadwasd",
      "updated_at": "2024-10-01T00:48:56.341Z"
  },
  {
      "created_at": "2024-10-01T00:49:00.023Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "wadwadwa",
      "id": "-O84YJWp0ycLe4hmwpnK",
      "title": "dwadwad",
      "updated_at": "2024-10-01T00:49:00.023Z"
  },
  {
      "created_at": "2024-10-01T00:49:03.504Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "dwadwad",
      "id": "-O84YKNDR2r3GW4R74ya",
      "title": "dwadwa",
      "updated_at": "2024-10-01T00:49:03.504Z"
  },
  {
      "created_at": "2024-10-01T00:53:41.476Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "dwadwadwa",
      "id": "-O84ZOEX2pC_aM7-2WLy",
      "title": "adwadwa",
      "updated_at": "2024-10-01T00:53:41.476Z"
  },
  {
      "created_at": "2024-10-02T13:08:29.582Z",
      "created_by": {
          "id": "-O7qjILkIA2cvt05SyCi",
          "username": "admin2"
      },
      "description": "admin2admin2",
      "id": "-O8CL9gBDgKgGfFGMy2v",
      "title": "admin2admin2",
      "updated_at": "2024-10-02T13:08:29.582Z"
  },
  {
      "created_at": "2024-10-08T16:57:14.505Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "weadwadwa",
      "id": "-O8h33-6z4bosTLCo1EF",
      "title": "wdwadwaf",
      "updated_at": "2024-10-08T16:57:14.505Z"
  },
  {
      "created_at": "2024-10-08T16:58:45.937Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "wsadwadwa",
      "id": "-O8h3PJiQ-hOpeB2G0wr",
      "title": "wafwsad",
      "updated_at": "2024-10-08T16:58:45.937Z"
  },
  {
      "created_at": "2024-10-08T16:59:52.369Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "esfsfes",
      "id": "-O8h3eXj-lVHcpSLASll",
      "title": "dsdfeasf",
      "updated_at": "2024-10-08T16:59:52.369Z"
  },
  {
      "created_at": "2024-10-09T17:41:33.276Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "dwadwa",
      "id": "-O8mMmqbvxDs81J90fiw",
      "title": "wdadwa",
      "updated_at": "2024-10-09T17:41:33.276Z"
  },
  {
      "created_at": "2024-10-09T17:41:36.572Z",
      "created_by": {
          "id": "-Nx7-eDvWzdn6FpJ4ZjE",
          "username": "admin"
      },
      "description": "dwadwad",
      "id": "-O8mMne63AD5rxRQZUUv",
      "title": "dwadwa",
      "updated_at": "2024-10-09T17:41:36.572Z"
  }
]

const users = [
    {
        username: "admin",
        password: "admin",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzI4NTQ0MzEyLCJleHAiOjE3Mjg1NDc5MTJ9.TQ_am23aKcewLQ3vFMq5c9fEIjnpW5ajTJ0fOfpl-v0"
    }
]

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' })
})

app.post('/auth/login', (req, res) => {
    const { username, password } = req.body
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
        res.status(200).json({ username, access_token: user.access_token })
    } else {
        res.status(401).json({ message: 'Invalid credentials' })
    }
})

app.get('/todo/all', (req, res) => {
    res.status(200).json({ "isSuccess": true, data: todos })
})

app.get('/todo', (req, res) => {
    res.status(200).json(todos)
})

app.post('/todo', (req, res) => {
    const { title, description } = req.body
    const newTodo = {
        title,
        description,
        updated_at: new Date().toISOString()
    }
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

app.get('/todo/:id', (req, res) => {
    const todo = todos[0]
    if (todo) {
        res.status(200).json(todo)
    } else {
        res.status(404).json({ message: 'Todo not found' })
    }
})

app.delete('/todo/:id', (req, res) => {
    res.status(204).send()
})

app.patch('/todo/:id', (req, res) => {
    const updatedTodo = { ...todos[0], ...req.body }
    res.status(200).json(updatedTodo)
})

app.listen(PORT, () => {
    console.log(`Mock server is running at http://localhost:${PORT}`)
})
