import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

export const registerUser = async (data) => {
  return await commonAPI("POST", `${serverURL}/registerusers`, {}, data);
};
export const loginUsers = async (userdata) => {
  return await commonAPI("POST", `${serverURL}/loginuser`, {}, userdata);
};
export const googleLogin = async (userdata) => {
  return await commonAPI("POST", `${serverURL}/registerusers`, {}, userdata);
};
//user section
export const viewAllNurse = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/viewAllNurse`, reqHeader, {});
};
export const viewAllphysio = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/viewAllphysio`, reqHeader, {});
};
export const viewAllcaretaker = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/viewAllcaretaker`, reqHeader, {});
};
export const viewUserProfile = async (id, reqHeader) => {
  return await commonAPI("GET", `${serverURL}/viewUser/${id}`, reqHeader, {});
};
export const UpdateUserProfile = async (userId, profile) => {
  return await commonAPI(
    "PUT",
    `${serverURL}/updateUserProfile/${userId}`,
    {},
    profile,
  );
};
export const viewCareTeam = async (Id) => {
  return await commonAPI(
    "GET",
    `${serverURL}/viewCareTeamProfile/${Id}`,
    {},
    {},
  );
};
export const getUserBookingsAPI = async (userId) => {
  console.log("all api s",userId)
  return await commonAPI("GET", `${serverURL}/booking/user/${userId}`,{},{});
};

//careteam section

export const viewBookings = async (caretakerId) => {
  return await commonAPI("GET", `${serverURL}/caretakerviewBookings/${caretakerId}`, {}, {});
};
export const viewSeniorList = async () => {
  return await commonAPI("GET", `${serverURL}/listPatients`, {}, {});
};
export const viewCareTeamProfile = async (id, reqHeader) => {
  return await commonAPI(
    "GET",
    `${serverURL}/CareTeamProfile/${id}`,
    reqHeader,
    {},
  );
};
export const UpdateCareTeamProfile = async (userId, profile) => {
  return await commonAPI(
    "PUT",
    `${serverURL}/updateCareTeamProfile/${userId}`,
    {},
    profile,
  );
};

// admin section

export const listAllUsers = async () => {
  return await commonAPI("GET", `${serverURL}/viewAllSeniors`, {}, {});
};
export const viewAllBookings = async () => {
  return await commonAPI("GET", `${serverURL}/viewAllBookings`, {}, {});
};
//admin-message
export const sendMessageAPI = async (data) => {
  return await commonAPI("POST", `${serverURL}/contact`, {}, data);
};
export const getMessagesAPI = async () => {
  return await commonAPI("GET", `${serverURL}/admin/messages`, {}, "");
};
export const adminupdateUserAPI = async (data) => {
  return await commonAPI("POST", `${serverURL}/admin/updateusers`, {}, data);
};
// payment section

export const createBookingAPI = async (id,userId) => {
  return await commonAPI("POST", `${serverURL}/booking/create/${id}`, {}, {userId});
};

export const createPaymentIntentAPI = async (bookingId) => {
  return await commonAPI(
    "POST",
    `${serverURL}/booking/payment-intent`,
    {},
    {bookingId}
  );
};

export const paymentSuccessAPI = async (body) => {
  return await commonAPI(
    "POST",
    `${serverURL}/booking/payment-success`,
    {},
    body,
  );
};

//chat between userand careteam
export const getChatMessagesAPI = async (user1, user2) => {
  return await commonAPI(
    "GET",
    `${serverURL}/chat/messages/${user1}/${user2}`,
    {},
   {}
  );
};
