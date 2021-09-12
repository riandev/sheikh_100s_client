import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  console.log(searchNumber);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q5dot1, setQ5dot1] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q7dot1, setQ7dot1] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10dot1, setQ10dot1] = useState(null);
  const [q10dot2, setQ10dot2] = useState(null);
  const [q11, setQ11] = useState(null);
  console.log(q10dot1, q10dot2);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://192.168.10.11:5011/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q5dot1value = (e) => {
    setQ5dot1(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q7dot1value = (e) => {
    setQ7dot1(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10dot1value = (e) => {
    setQ10dot1(e.target.value);
  };
  const q10dot2value = (e) => {
    setQ10dot2(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans5dot1: q5dot1,
      ans6: q6,
      ans7: q7,
      ans7dot1: q7dot1,
      ans8: q8,
      ans9: q9,
      ans10dot1: q10dot1,
      ans10dot2: q10dot2,
      ans11: q11,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://192.168.10.11:5011/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
          // (next === true && "none") || pressSearch === false
          //   ? "block"
          //   : "none",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" || q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ২. আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি ।স্যার আপনি কি ফ্রি আছেন,
          আমি কি আপনার সাথে একটু কথা বলতে পারি?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুনবা কথা শেষ করে
          সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <p
        className="font-weight-bold"
        style={{ display: q2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জনানো যাচ্ছে যে আপনার কলটি রেকর্ড করা হচ্ছে এবং তা
        ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৩. স্যার, আমি কি জানতে পারি আপনার বয়স কত?</h6>
        <p className="text-secondary">
          (যদি উত্তর আসে ‘১৮ বছরের বেশি’ তবে কথা বলা চালিয়ে যাবেন, নতুবা
          ধন্যবাদ দিয়ে কথা শেষ করে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="-18">১৮ এর নিচে</option>
            <option value="18-24">১৮-২৪</option>
            <option value="25-33">২৫-৩৩</option>
            <option value="34-50">৩৪-৫০</option>
            <option value="50+">৫০+</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "18-24" || q3 === "25-33" || q3 === "34-50" || q3 === "50+"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৪. স্যার, আপনি কি ধূমপান করেন?</h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ হয় তবে জিজ্ঞসা করবে ৫নং প্রশ্ন। যদি উত্তর না আসে তবে
          ধন্যবাদ দিয়ে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৫. স্যার, আমি কি জানতে পারি, আপনি কোন ব্র্যান্ড এর সিগারেট ধুমপান
          করেন?
        </h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="sheikh">শেখ</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="royals">রয়েলস</option>
            {/* <option value="marise">মেরিস</option>
            <option value="real">রিয়েল</option> */}
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q5 === "sheikh" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৫.১ স্যার, আপনি কি শেখ রেগুলার ধূমপান করেন নাকি লম্বাটা/SHEIKH 100s?
        </h6>
        <Form.Group onChange={q5dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="sheikhRegular">Sheikh Regular</option>
            <option value="sheikh100s">Sheikh 100s</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q5 === "derby" ||
            q5 === "pilot" ||
            q5 === "hollywood" ||
            q5 === "royals" ||
            q5 === "others" ||
            q5dot1 === "sheikhRegular" ||
            q5dot1 === "sheikh100s"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৬. স্যার, গত এক সপ্তাহের মধ্যে আপনার সাথে কি কোন Sheikh/JTI/Navy
          কোম্পানির প্রতিনিধি/BA এর সাথে দেখা হয়েছিল?
        </h6>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৭. প্রতিনিধির সাথে কথা বলার পর আপনি দোকান থেকে কত শলাকা শেখ 100s
          সিগারেট কিনেছিলেন?
        </h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="noPurchase">কিনিনাই</option>
            <option value="1_stick">১ শলাকা</option>
            <option value="2_stick">২ শলাকা</option>
            <option value="3_stick">৩ শলাকা</option>
            <option value="4_stick">৪ শলাকা</option>
            <option value="5_stick">৫ শলাকা</option>
            <option value="packet">প্যাকেট</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q7 === "3_stick" || q7 === "4_stick" || q7 === "5_stick"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৭.১ আপনি কি সিগারেট রাখার জন্য ম্যাচ শলাকা সহ স্যাশে/প্যাকেট পেয়েছেন?
        </h6>
        <Form.Group onChange={q7dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q7 === "noPurchase" ||
            q7 === "1_stick" ||
            q7 === "2_stick" ||
            q7 === "packet" ||
            q7dot1 === "yes" ||
            q7dot1 === "no"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৮. আপনার কি মনে আছে প্রতিনিধি SHEIKH 100s নিয়ে কথা বলার সময় তার মুল
          বক্তব্য কি ছিল অথবা শেখ নিয়ে কি কি কথা বলেছিল ?
        </h6>
        <p className="text-secondary">
          (**একই দামে বাড়তি, চলবে লম্বা সময় ধরে ফুর্তি)
        </p>
        <Form.Group onChange={q8value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="moreTobacco">বেশি তামাক</option>
            <option value="more">বেশি</option>
            <option value="samePriceMoreTobacco">একই দামে বেশি</option>
            <option value="extra">বাড়তি</option>
            <option value="long">লম্বা</option>
            <option value="moreSatisfaction">লম্বা তৃপ্তি</option>
            <option value="satisfaction">তৃপ্তি</option>
            <option value="longTime">বেশিক্ষন</option>
            <option value="delight">ফুর্তি</option>
            <option value="moreDelight">বেশি ফুর্তি</option>
            <option value="extraDelight">বাড়তি ফুর্তি</option>
            <option value="comeOnHero">চলো বীর</option>
            <option value="youAloneAreOneHundred">তুমি একাই একশো</option>
            <option value="canNotRemember">মনে করতে পারে নি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div>
        <div
          style={{
            display: q8 === null ? "none" : "block",
          }}
          className="mt-2"
        >
          <h6>৯.আপনি কি ভবিষ্যতে Sheikh 100s সিগারেট পান করবেন?</h6>
          <Form.Group onChange={q9value} as={Row}>
            <Form.Control as="select" className="w-50 ml-3">
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div
        style={{
          display: q9 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১০.১. স্যার, আমি কি জানতে পারি, আপনি কেন ভবিষ্যতে Sheikh 100s সিগারেট
          পান করবেন?
        </h6>
        <Form.Group onChange={q10dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="design">ডিজাইন</option>
            <option value="taste">স্বাদ</option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="samePriceWithExtraTobacco">
              একই দামে বাড়তি তামাক
            </option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q9 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১০.২. স্যার, আমি কি জানতে পারি, আপনি কেন ভবিষ্যতে Sheikh 100s সিগারেট
          পান করবেন না?
        </h6>
        <Form.Group onChange={q10dot2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="design">ডিজাইন</option>
            <option value="taste">স্বাদ</option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="longStick">লম্বা শলাকা</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q10dot1 === "design" ||
            q10dot1 === "taste" ||
            q10dot1 === "availability" ||
            q10dot1 === "samePriceWithExtraTobacco" ||
            q10dot2 === "design" ||
            q10dot2 === "taste" ||
            q10dot2 === "availability" ||
            q10dot2 === "longStick"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১১. আপনার নিকটস্থ চায়ের দোকানে কি Sheikh 100s সিগারেট পাওয়া যায়?
        </h6>
        <Form.Group onChange={q11value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q3 === "-18" ||
            q4 === "no" ||
            q6 === "no" ||
            q11 === "yes" ||
            q11 === "no"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
