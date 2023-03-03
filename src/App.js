import { useState } from 'react';
import{ marked } from 'marked';
import html2pdf from 'html2pdf.js';
import './App.css';



function App() {
  const [ text, setText ] = useState(`

  <!--
Welcome to Resume_Ranger !

This is the template you can use to get started.

Easily remove personal info by using a variable follow with a second value and "||":

@NAME=Real Name||Hidden Name

and change @REDACTED to be true

@REDACTED=true
@REDACTED=false
@NAME=Name||Hidden
@EMAIL=realemail@gmail.com||fake@email.com
@PHONE=(123) 123-REAL||(555) 123-5555
@LOCATION=Los Angeles, CA ZIP||City, State ZIP
@LINKEDIN=linkedin.com/in/your-url||linkedin.com
@GITHUB=github.com/username||github.com  -->

# {NAME}


{LOCATION} (Open to Remote) | {PHONE} | {EMAIL} 

[{LINKEDIN}](https://{LINKEDIN}) | [{GITHUB}](https://{GITHUB})

<div className="vertical-spacer"></div>

## Technical Skills

**Front End** | React, NextJS, Javascript, TypeScript, NodeJS, CSS, styled-components

**Back End** | Golang, Java, C, C++, PostgreSQL, MongoDB, MySQL

**Testing/Deployment** | Jest, Mocha, Chai, AWS:EC2, AWS:ECS, Terraform, JUnit

**Developer Tools** | Docker, Git, npm, Webpack, Babel, Agile Methodology, TDD

<div className="vertical-spacer"></div>

## Experience & Projects

### Back-End Software Engineer | Name of Application <span class="spacer"></span>Jan 2022 - Present

*Backend redesign for reviews module of legacy e-commerce microservice*<span class="spacer"></span>Javascript | Node.js | Express | PostgreSQL | EC2

- Optimized existing monolithic back-end of an e-commerce website to handle 360,000 requests per minute with low latency **(<20 ms)** and error rate **(<0.1%)** by horizontally microservice to 5 AWS EC2 instances and using a least connections load balancing method with NGINX to increase fault tolerance
- Leveraged K6 and Loader.io to identify performance bottlenecks, then implemented caching to lower frequency of database retrieval to allow for a throughput increase of **733%**
- Reduced query times to database from 6,000 ms to **12 ms** by using aggregator functions and indexing foreign keys
- Mentored peer engineers on front-end development and best practices

<div className="vertical-spacer"></div>

### Front-End Engineer, UI Lead | Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022

*Remote learning management system web application* <span class="spacer"></span> JavaScript | Next.js | MUI | Node.js | Firebase | Jest

- Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe
- Directed modeling of data and API endpoints to allow for seamless frontend integration to backend
- Implemented server-side rendering with Next.js to improve page load time, achieving Lighthouse SEO score of 100

<div className="vertical-spacer"></div>

### Front-End Engineer, UI Lead | Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022

*Remote learning management system web application* <span class="spacer"></span> JavaScript | Next.js | MUI | Node.js | Firebase | Jest

- Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe
- Directed modeling of data and API endpoints to allow for seamless frontend integration to backend
- Implemented server-side rendering with Next.js to improve page load time, achieving Lighthouse SEO score of 100

<div className="vertical-spacer"></div>

### Front-End Software Engineer | Name of Application <span class="spacer"></span> 2020-2021

*Single page e-commerce website* <span class="spacer"></span> JavaScript | React | Express | EC2 | Jest

- Architected a front-end service of a ratings and reviews system to allow users to post reviews, view average ratings, search by keyword, and sort by helpfulness, relevance, date, and/or star ratings for a specific product
- Improved web page quality by enabling text compression through Brotli and React Lazy Load, increasing Google Lighthouse performance by 132%
- Tracked user interactions throughout the application with React higher-order components to reuse component logic

<div className="vertical-spacer"></div>

<!-- Move this section above Technical Skills if you're a student/new grad -->
## Education

**University of XXX** - Master of Science, Computer Science, GPA (only >= 3.7)<span class="spacer"></span>2023

**University of XXX** - Bachelors of Science, Computer Science, GPA (only >= 3.7)<span class="spacer"></span>2022


  # H1
## H2
[title](https://www.example.com)
\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

1. First item
2. Second item
3. Third item

> blockquote

![alt text](image.jpg)

**bold text*

`);


const handleDownload = () => {
  const element = document.getElementById('preview');
  html2pdf(element);
};

marked.setOptions({
  breaks: true
})


  return (
    <div className="App">
       <h1 className='main-title'>
       Resume_Ranger
        </h1>
      <section className='column'>
        <h1 className='title'>
          Markdown Editor
        </h1>
     <textarea id='editor' 
     onChange ={(event) => {
      setText(event.target.value);
     }}
     value = {text}
     ></textarea>
     </section>
<section className='column'>
<h1 className='title'>
          Markdown Previewer
        </h1>
     <div className='pdf-container' id='preview' 
     dangerouslySetInnerHTML={{
      __html: marked(text),
     }}
     ></div>
     <button className='downloadbtn' onClick={handleDownload}>Download PDF</button>
     </section>
    </div>
  );
}

export default App;
