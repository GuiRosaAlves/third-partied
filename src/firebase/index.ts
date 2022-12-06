import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  get,
  update,
  push,
  remove,
  set,
} from "firebase/database";
import { firebaseConfig } from "../config";

export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);

//CRUD FUNCTIONS TO INTERACT WITH FIREBASE
export async function createNode(path = "", data: any) {
  console.log("----CREATING----");
  const response = await set(child(dbRef, `/${path}`), data)
    .then()
    .catch();

  return response;
}

export async function readNode(path = "") {
  console.log("----READING----");
  const response = await get(child(dbRef, `/${path}`))
    .then()
    .catch();

  return response.val();
}

export async function updateNode(path: string, data: any) {
  console.log("----UPDATING----");
  const updates = {};
  //@ts-ignore
  updates["/" + path] = data;

  const response = await update(dbRef, updates).then().catch();

  return response;
}

export async function deleteNode(path: string) {
  console.log("----DELETING----");

  const response = await remove(child(dbRef, `/${path}/tools`))
    .then((value) => console.log("RESPONSE: ", value))
    .catch(() => false);

  return response;
}

export async function fetchGameInfo(gameName = "pathOfExile") {
  const response = await get(child(dbRef, `/${gameName}`))
    .then()
    .catch();

  return response.val();
}

export async function fetchTools(gameName = "pathOfExile") {
  const response = await get(child(dbRef, `/${gameName}/tools`))
    .then()
    .catch();

  return response.val();
}

export async function fetchGameTags(gameName = "pathOfExile") {
  const response = await get(child(dbRef, `/${gameName}/gameTags`))
    .then()
    .catch();

  return response.val();
}
