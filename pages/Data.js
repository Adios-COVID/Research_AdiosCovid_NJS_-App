import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import Image from 'next/image'
import dataimg1 from '../public/data_img_1.png'
import dataimg2 from '../public/data_img_2.png'
import IncomeVisualization from '../components/Income_viz'
import { Black_And_White_Picture } from '@next/font/google';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Latino Population vs. Total Population in Eastern Washington',
      padding: {
        top: 10,
        bottom: 10
      },
      font: {
        size: "35rem",
        family: 'Roboto',
        weight: 'normal'
      },
      color: "black"
    },
  },
  labels: {
    color: "black"
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
class Page extends React.Component {
  static async getInitialProps(ctx) {
    var county = [];
    var totalPopulation = [];
    var latinoPopulation = [];
    const res = await fetch('https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-populations')
    const json = await res.json()
    for (let i = 0; i < json.data.length; i++) {
      county[i] = json.data[i].County;
      totalPopulation[i] = json.data[i].Pop_Estimate;
      latinoPopulation[i] = json.data[i].Estimated_Latino_Pop;
    }
    const pop = {
      labels: county,
      datasets: [
        {
          label: 'Total Population',
          data: totalPopulation,
          backgroundColor: 'rgb(237, 231, 45)',

          stack: 'Stack 0',
        },
        {
          label: 'Latino Population',
          data: latinoPopulation,
          backgroundColor: 'rgb(245, 122, 122)',
          stack: 'Stack 0',
        }
      ],
    };
    return { data: pop }
  }

  render() {
    return <div class="container" id="data_page">
      <div class="row" id="data_row">
        <div class="media" id="data_media">
          <Image
            src={dataimg1}
            alt="Data page First image"
            className="data_media_img mr-3"
          />
          <div class="media-body">
            <h2>How We Collect Data</h2>
            <p>Our team gathered two types of datasets: qualitative and quantitative data. Qualitative data was collected through surveys and interviews focused
              on the social aspects affecting individuals with Long COVID. The collected data was anonymized to protect the privacy of participants, with any
              identifying indicators removed. In addition, we collected quantitative data by performing web scraping and aggregating demographic data from Grant,
              Douglas, Okanogan, Lincoln, Ferry, Stevens, and Pend Oreille. These datasets were primarily obtained from the U.S. Census, the Washington State
              Department of Health, the Bureau of Labor Statistics, and the Pew Research Center. To ensure accuracy and consistency, we cleaned and normalized these
              datasets using Jupyter Notebook.</p>
          </div>
        </div>
      </div>
      <div class="row" id="data_row">
        <div class="media" id="data_media">
          <div class="media-body">
            <h2>Data & Findings</h2>
            <p>
              Based on our extensive research, we have determined that approximately 90,000 Latinos may be suffering from Long COVID, representing approximately 9-10% of
              the total Latino population. Those with more severe hospitalized conditions have a higher probability of developing Long COVID. Individuals under 18 years
              of age have a lower probability of developing Long COVID, while those in older age groups have the highest probability. Our research also indicates that
              female Latinos have a relatively higher probability of developing Long COVID. Even among individuals who were not hospitalized, females have approximately
              6% higher probability of experiencing Long COVID compared to males.
            </p>
          </div>
          <Image
            src={dataimg2}
            alt="Data page second image"
            className="data_media_img mr-3"
          />
        </div>
      </div>
      
        <div class="boxed">
          <div class="media-body">
            Lorem ipsum dolor sit amet. Sit voluptatem consequatur ea laudantium itaque aut galisum dolorem eum atque harum aut rerum accusamus et omnis voluptatibus qui amet neque. Vel tenetur voluptatum hic officiis excepturi id suscipit quam sit voluptatibus voluptates. Qui tenetur omnis nam sint exercitationem quo porro aliquam ut similique illo.
            Sit nulla amet aut culpa porro qui architecto consequatur sit molestias vitae ut neque asperiores et minima voluptates At quidem sequi. In illo alias et suscipit veniam ut sint quia et quae deserunt. Sit voluptatem doloribus et tenetur illo qui minima minima. Ea officiis eaque sit porro aperiam eum unde maxime qui possimus minus non quod architecto cum culpa dolores.
          </div>
          {/* The visualization below shows how many Latinos there are in each of the Eastern Washington counties that we track. */}
          <Bar class='barchart' options={options} data={this.props.data} />
        </div>

      <div class="boxed">
        <div class="media-body">
          Lorem ipsum dolor sit amet. Sit voluptatem consequatur ea laudantium itaque aut galisum dolorem eum atque harum aut rerum accusamus et omnis voluptatibus qui amet neque. Vel tenetur voluptatum hic officiis excepturi id suscipit quam sit voluptatibus voluptates. Qui tenetur omnis nam sint exercitationem quo porro aliquam ut similique illo.
          Sit nulla amet aut culpa porro qui architecto consequatur sit molestias vitae ut neque asperiores et minima voluptates At quidem sequi. In illo alias et suscipit veniam ut sint quia et quae deserunt. Sit voluptatem doloribus et tenetur illo qui minima minima. Ea officiis eaque sit porro aperiam eum unde maxime qui possimus minus non quod architecto cum culpa dolores.
        </div>
        {/* The visualization below shows the income rates of Latinos broken down by each county in Eastern Washington that we track. */}
        <IncomeVisualization />
      </div>

      <div class="row" id="section4">
        <div class="testbox">
          <form action="/">
            <div class="banner">
              <h1 id="form-title">Submit Your Data</h1>
            </div>
            <p>Share your own experience with long covid to help us!</p>
            <p>We have google form that you can fill out. Your submission of data will help us a lot with our research!</p>
            <hr />
            <fieldset>
              <legend>Your Information</legend>
              <div class="item">
                <div class="name-item">
                  <div>
                    <input type="text" name="code" placeholder="ZIP Code" />
                  </div>
                </div>
              </div>
              <div class="item">
                <label for="description">What is Your Experience with Long COVID?<span>*</span></label>
                <input id="description" type="text" name="text" required />
              </div>
            </fieldset>
            <div class="btn-block">
              <button id="submit_button" type="submit" href="/">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }
}

export default Page