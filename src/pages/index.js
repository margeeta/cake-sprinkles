import React from "react"

import Layout from "../components/layout"
import data from "../../data.json"

const IndexPage = () => (
  <Layout>
    <hgroup id="hgroup">
      <h1>Cake Icons</h1>
      <h2>cake-sprinkles</h2>
      <p>
        Cake-sprinkles are built for the{" "}
        <a href="https://app.uxpin.com/design-system/837325e9a85b5482d36f/intro">
          Phunware Cake Design System
        </a>
        .<br />Used throughout portal, SDKs, and sample apps.
      </p>
      <p>
        Icons should follow the same contrast standars as typography AA or
        better.
        </p>
    </hgroup>

    <hr />

    <code>
      <div>cake-sprinkle name="icon-name" cake-sprinkle</div>
    </code>

    <section class="ic_group">

      <h2>Logos</h2>
      <div class="ic_group_row">
        {data.logos.map(icon => (
          <div class="icon">
            <a href={icon.image} download target="new"><img src={icon.image} /></a>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section class="ic_group">

      <h2>Global</h2>
      <div class="ic_group_row">
        {data.general.map(icon => (
          <div class="icon">
            <a href={icon.image} download target="new"><img src={icon.image} width="24" /></a>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section class="ic_group">

      <h2>MaaS Navigation</h2>
      <div class="ic_group_row">
        {data.logos.map(icon => (
          <div class="icon">
            <a href={icon.image} download target="new"><img src={icon.image} width="24" /></a>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section class="ic_group">

      <h2>Wayfinding</h2>
      <div class="ic_group_row">
        {data.logos.map(icon => (
          <div class="icon">
            <a href={icon.image} download target="new"><img src={icon.image} /></a>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </section>

  </ Layout >
)

export default IndexPage
