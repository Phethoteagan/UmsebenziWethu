import { IonItem, IonLabel, IonSearchbar, IonCard } from "@ionic/react";
import React, { useEffect, useState } from "react";
import {
  collection,
  docs,
  doc,
  getDocs,
  getDoc,
  limit,
  query,
  queryEqual,
  where,
  setDoc
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router";
import UserProfile from "./userSession";
// import { setDoc } from "@firebase/firestore";
import { useHistory } from "react-router";

const Database = () => {
  const [searchText, setSearchText] = useState("");
  // current fellowshipId
  const category = useParams();
  // set the selected reply
  const [selectedReply, setSelectedReply] = useState("");
  // set selected add reply
  const [addReply, setAddReply] = useState("");
  // fellowship posted discussions
  const [posts, setPosts] = useState([]);
  // form for adding replies
  // const [addComment, setAddComment] = useState(false);
  const history = useHistory()

  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [location, setLocation] = useState("");
  // const [category, setCategory] = useState("");
  // const { photo, takePhoto } = usePhotoGallery();
  // current logged user email
  const userEmail = UserProfile.getName();
  // current logged user posted jobs
  const [jobs, setJobs] = useState([]);
  // specific job user data
  const [userData, setUserData] = useState("");
  var dummy = "";

  function make(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(async () => {
    var foundDiscussions = [];
    const dbQuery = query(
      collection(db, "post"),
      where("category", "==", category.category)
    );
    const queryResults = await getDocs(dbQuery);

    queryResults.forEach((dis) => {
      var data = dis.data();
      data["id"] = dis.id;
      foundDiscussions.push(data);
    });
    setPosts(foundDiscussions);
  }, []);

  function paste() {
    const send = async () => {
      var id = make(20);
      var docData = {
        jobtitle: jobTitle,
        jobdescription: jobDescription,
        jobcategory: jobCategory,
        location: location,
        category: category,
        // photo: photo,
        id: id,
        adminEmail: userEmail,
        appliedUsers: [],
      };
      await setDoc(doc(db, "post", id), docData)
        .then((response) => {
          alert("posted post", response);
          /*setPage('3')  pass as props*/
        })
        .catch((error) => {
          console.log("got it");
          alert("error sham", error);
        });
    };
    send();
  }

  return (
    <div id="page">
      {/* add post button */}
      <div className="discussionContainer">
        {/* search */}

        {/* <IonSearchbar className='searchbar' value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar> */}

        <div>
          
          {console.log("List of posted jobs", posts)}
          {posts.map((post) => {
            return (
              <>
                <IonCard
                  className="posts"
                  id={post.id}
                  style={{
                    transform:
                      selectedReply == post.id ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  {/* fellewship discussions */}
                  {/* <img className='postImg' alt='profilePicture' src={post.userPic} /> */}
                  <h3>
                    {post.jobtitle} {post.jobDescription}{" "}
                  </h3>
                  <p className="date">{post.jobtitle}</p>
                  {/* <p className='content'>{post.text}</p> */}
                  <div id="postBtns">
                    {/* {selectedReply != post.id && <button id='1' onClick={(e) => {(e,post.id) }}>View replies<MdKeyboardArrowDown size='20'/></button>}
                      {selectedReply == post.id && <button id='1' onClick={(e) => {(e,post.id) }}>Close replies<MdKeyboardArrowUp size='20'/></button>} */}
                    <p>
                      {post.jobtitle} {post.category} {post.jobcategory}
                    </p>
                    <button
                      onClick={(e) => {
                        let url = '/pages/Dashboard/job/'+post.id
                        window.location.replace(url)
                      }}
                    >
                      <h5>Apply</h5>
                    </button>
                  </div>

                 
                </IonCard>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Database;
