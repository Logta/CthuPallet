import { auth, Firebase } from "@/lib/firebase";
import { User } from "@/models";
import _ from "lodash";

const awaitOnAuth = async (): Promise<User> => {
  return new Promise(function (resolve, reject) {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        resolve({
          Login: true,
          ID: _.isNil(user) ? "" : user.uid,
          Name:
            _.isNil(user) || _.isNil(user.displayName) ? "" : user.displayName,
        });
      } else {
        reject({
          Login: false,
          ID: "",
          Name: `ログイン状態の検証時にエラーが発生しました`,
        });
      }
    });
  });
};

const awaitOnGoogleLogin = async (): Promise<User> => {
  const provider = new Firebase.auth.GoogleAuthProvider();
  return new Promise(function (resolve, reject) {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        resolve({
          Login: true,
          ID: _.isNil(user) ? "" : user.uid,
          Name:
            _.isNil(user) || _.isNil(user.displayName) ? "" : user.displayName,
        });
      })
      .catch((error) => {
        reject({
          Login: false,
          ID: "",
          Name: `ログイン時にエラーが発生しました (${error})`,
        });
      });
  });
};

const awaitOnPasswordLogin = async (data: any): Promise<User> => {
  const res = await auth.signInWithEmailAndPassword(data.email, data.password);

  if (res) {
    var user = res.user;
    return {
      Login: true,
      ID: _.isNil(user) ? "" : user.uid,
      Name: _.isNil(user) || _.isNil(user.displayName) ? "" : user.displayName,
    };
  } else {
    return {
      Login: false,
      ID: "",
      Name: `ログイン時にエラーが発生しました`,
    };
  }
};
const signOutFirebase = async (): Promise<User> => {
  return new Promise(function (resolve, reject) {
    auth.onAuthStateChanged((user) => {
      auth
        .signOut()
        .then(() => {
          resolve({
            Login: true,
            ID: _.isNil(user) ? "" : user.uid,
            Name:
              _.isNil(user) || _.isNil(user.displayName)
                ? ""
                : user.displayName,
          });
        })
        .catch((error) => {
          reject({
            Login: false,
            ID: "",
            Name: `ログアウト時にエラーが発生しました (${error})`,
          });
        });
    });
  });
};

const createPasswordUser = async (data: any): Promise<boolean> => {
  try {
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    return true;
  } catch (e) {
    alert(JSON.stringify(e.message));
    return false;
  }
};

export {
  awaitOnAuth,
  awaitOnGoogleLogin,
  awaitOnPasswordLogin,
  createPasswordUser,
  signOutFirebase,
};
