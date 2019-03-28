import React from 'react';

export default function PostList({post}) {
  //create words and post array
  const word = post.words.map(words =>
    <li key = {words}> {words}</li>);
  return (
    <li>
      <ul> <br />
        <li>word: <ul>{word}</ul></li>
        <li>sentence: {post.sentence}</li>
        <li>sentences: {post.sentences}</li>
        <li>paragraph: {post.paragraph}</li>
      </ul>
    </li>
  );
}