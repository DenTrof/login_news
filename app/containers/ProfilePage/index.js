/**
 *
 * ProfilePage
 *
 */

import React from "react";
import Banner from 'images/banner.jpg';

export default function ProfilePage() {

  return (
    <section className="profile">
      <h1>ProfilePage H1</h1>
      <a href="https://www.reactboilerplate.com/">
        <img src={Banner} alt="react-boilerplate-logo" />
      </a>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio,
        at laoreet tellus sodales in.
        Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta
      </p>
    </section>
  );
}
