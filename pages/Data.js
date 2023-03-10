import React from 'react';
import Image from 'next/image'
import dataimg1 from '../public/data_img_1.png'
import dataimg2 from '../public/data_img_2.png'
import IncomeVisualization from '../components/Income_viz.js'
import PopulationBarChart from '../components/population_bar_vis'
import MapPage from './Map.js'
import useTranslation from "next-translate/useTranslation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link'

export default function DataPage() {
  const { t } = useTranslation("common");
  return (
    <>
    <Navbar />
      <div class="container" id="data_page">
          <div class="row" id="data_row">
            <div id="data_media">
              <div class="col-md-6 float-md-left">
                <Image
                  src={dataimg1}
                  alt="Data page First image"
                  className="data_media_img"
                />
              </div>
              <div class="col-md-6 float-md-right">
                <h2>{t("data-heading1")}</h2>
                <p>{t("data_p1")}</p>
              </div>
            </div>
          </div>
          <div class="row" id="data_row">
              <div class="col-md-6 float-md-left">
                <h2>{t("data-heading2")}</h2>
                <p>
                  {t("data_p2")}
                </p>
              </div>
              <div class="col-md-6 float-md-right">
              <Image
                src={dataimg2}
                alt="Data page second image"
                className="data_media_img"
              />
            </div>
          </div>

            <div class="boxed">
              <div class="pop">
                <p>
                {t("Data-Viz1")}{" "}
                <Link className="hover:underline" href="https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-populations\" target="_blank" rel="noopener noreferrer"> API. </Link>
                {t('Data-Viz1-2')}{" "}
                </p>

              {/* The visualization below shows how many Latinos there are in each of the Eastern Washington counties that we track. */}
              <PopulationBarChart />
              </div>
            </div>

          <div class="boxed">
            <div class="income">
              <p>
              {t("Data-Viz2")}
              <Link className="hover:underline" href="https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-income\" target="_blank" rel="noopener noreferrer"> API. </Link>
              {t("Data-Viz2-1")}
              </p>
              <p>
                {t("Data-Viz2-2")}
              </p>
            {/* The visualization below shows the income rates of Latinos broken down by each county in Eastern Washington that we track. */}
            <IncomeVisualization />
            </div>
          </div>

          <div class="boxed">
              <p>
              {t("Data-Viz3")}
              </p>
            {/* Map below with various thesis proving information */}
            <MapPage />
          </div>
        </div>
      <Footer />
      </>
   );
}