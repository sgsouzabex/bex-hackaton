import {  pubsub } from "firebase-functions";
import TOPICS from "./topics";
// import { PubSub } from "@google-cloud/pubsub";

export const funcName = pubsub
    .topic(TOPICS.TOPIC_FUNC_NAME)
    .onPublish(async () => {
      try {
        console.info("Function started!");

        console.info("RestrictedEmployee: Expiration job finished.");
      } catch (error) {
        console.error("Function failed.");
        console.error(error)
      }
    });

 