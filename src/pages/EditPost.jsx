import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useParams, Navigate } from "react-router-dom";
import appwriteService from "../appwrite/config";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = Navigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost;
