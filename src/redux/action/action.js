import * as types from "./actionType";
import { db } from "../../firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const getData = (user) => ({
  type: types.GET_DATA,
  payload: user,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const editUser = () => ({
  type: types.EDIT_USER,
});

const loginUser = (user) => ({
  type: types.LOGIN_USER,
  payload: user,
});

export const loadUsers = () => {
  return async function (dispatch) {
    const userCollectionRef = collection(db, "user");
    const data = await getDocs(userCollectionRef);
    dispatch(getData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  };
};

export const AddUser = (username, email, password) => {
  return function (dispatch) {
    db.collection("user")
      .add({ username, email, password })
      .then(function () {
        dispatch(registerSuccess("user"));
      });
  };
};

export const userDelete = (id) => {
  return function (dispatch) {
    const userDoc = doc(db, "user", id);
    deleteDoc(userDoc);
  };
};

export const getSingleUser = (id) => {
  return async function (dispatch) {
    const userDoc = doc(db, "user", id);
    const userData = await getDoc(userDoc);
    dispatch(getUser(userData.data()));
  };
};

export const EditUserData = (id, user) => {
  return async function (dispatch) {
    const userDoc = await doc(db, "user", id);
    updateDoc(userDoc, user);
    dispatch(editUser());
  };
};

export const userLogin = (email, password) => {
  return async function (dispatch) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(loginUser(user));
    });
  };
};
