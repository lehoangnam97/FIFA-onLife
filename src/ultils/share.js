import Share from "react-native-share";

const facebookShareOptions = {
    title: "FIFA onLife",
    message: "Join with us ",
    url: "https://play.google.com/store/movies/details/Justice_League?id=Hbdw7xaAdzU",
    subject: "Share Link", //  for email
    social: "facebook",
};

const twitterShareOptions = {
    title: "FIFA onLife",
    message: "Join with us ",
    url: "https://play.google.com/store/movies/details/Justice_League?id=Hbdw7xaAdzU",
    subject: "Share Link", //  for email
    social: "twitter",
};
export const shareFacebook=()=>{ Share.shareSingle(facebookShareOptions);};
export const shareTwitter=()=>{shareSingle(twitterShareOptions);};