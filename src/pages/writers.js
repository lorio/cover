import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
/* import Album from "../components/album/album" */

const Article = styled.div`
<<<<<<< HEAD
  max-width: 650px;
  margin: 0 auto; */
/* `
||||||| merged common ancestors
  max-width: 650px;
  margin: 0 auto;
`
=======
  max-width:960px;
  margin: 0 auto;
`
>>>>>>> useStaticQuery
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const Album = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  
<<<<<<< HEAD
  <Layout>
      <SEO title="Literati"
        description="Portraits of poets and playwrights from the COVER archive: Eileen Miles, Allen Ginsberg, Bina Sharif, Rene Ricard, Alice Notley, and Amiri Baraka" />
      <h1>Luminaries of Literature</h1>
      
      <ArticleTitle><em>Portrait Album</em></ArticleTitle>
      <p>Art photos of literary rock stars from the <em>COVER</em> archives.</p>

      <Album photos={data.albumsJson.album}/>
  </Layout>
)
||||||| merged common ancestors
  <Layout>
    <Article>
      <SEO title="Literati"
        description="Portraits of poets and playwrights from the COVER archive: Eileen Miles, Allen Ginsberg, Bina Sharif, Rene Ricard, Alice Notley, and Amiri Baraka" />
      <h1>Luminaries of Literature</h1>
      
      <ArticleTitle><em>Portrait Album</em></ArticleTitle>
      <p>Art photos of literary rock stars from the <em>COVER</em> archives.</p>

      <Album photos={data.albumsJson.album}/>

    </Article>
  </Layout>
)
=======
  @media (max-width: 400px) {
      display: block;
      padding:0;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "images/album"}}) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    < Layout >
      <Article>
        <SEO title="Literati"
          description="Portraits of poets and playwrights from the COVER archive: Eileen Miles, Allen Ginsberg, Bina Sharif, Rene Ricard, Alice Notley, and Amiri Baraka" />
        <h1>Luminaries of Literature</h1>
        <p>Art photos of literary rock stars from the <em>COVER</em> archives.</p>
        <ArticleTitle><em>Portrait Album</em></ArticleTitle>
>>>>>>> useStaticQuery

        <Album>
        {data.allFile.edges.map(({node}) => (
          <Img fluid={node.childImageSharp.fluid}
          key={node.id}
          maxWidth={node.sizes}
          alt={node.base.split(".")[0]}
          />
        ))} 
        </Album>
        <p>Top row: Amiri Baraka at The Knitting Factory, photo: Luigi Cazzaniga; Bina Sharif. Middle row: Eileen Myles; Alice Notley. Bottom: Rene Ricard, photo: Allen Ginsberg; Allen Ginsberg.</p>
      </Article>
    </Layout >
  )
}

/* export const query = graphql`
  query AlbumpageQuery {
    albumsJson {
      album {
        title
        imgw
        image {
          childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  ` */