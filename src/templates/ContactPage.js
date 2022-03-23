import React from 'react'
// import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import SocialButtonsContainer from 'react-social-media-buttons'


import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  phone,
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            {/* {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )} */}
            {/* {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail />  {email}
              </a>
            )} */}
            <SocialButtonsContainer
        links={[
          'https://www.facebook.com/EconZest',
          // 'https://twitter.com/Twitter',
          'https://www.instagram.com/econzest/',
          'https://www.linkedin.com/company/econzest',
          
        ]}
        buttonStyle={{
          margin: '0px 0px',
          backgroundColor: '#fff',
          borderRadius: '10%'
        }}
        iconStyle={{ color: '#00c2bd' }}
        openNewTab={true}
      />
          </div>
        </div>
        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>

  
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`