import bodyParser from "body-parser";
import validator from "validator";
import path from "path";
import firebase from "firebase";

import config from "./config";

console.log("webpack is configured successfully");
console.log(`webpack initialized on ${config.domain_name}`);
