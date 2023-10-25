"use client";
import React, { useEffect, useState } from "react";
import style from "./confirm.module.scss";
import Link from "next/link";
import Image from "next/image";
import Pdf from "@/assets/agreement-print.png";
import { useConfirmQuery, useViewMutation } from "@/store/services/agreement";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
// import ProtectedRoute from "@/components/protected/ProtectedRoute";
import Spinner from "react-bootstrap/Spinner";

export default function Page() {
  const route = useRouter();
  // const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const id: any = searchParams.get("url");
  const [loading, setLoading] = useState(false);
  // const [view, { isLoading: viewLoading }] = useViewMutation();
  const { data, error, isLoading } = useConfirmQuery(id);
  let soldStatus = data?.data?.[0]?.sold_status;


  const toggleAndPrint = () => {
    const printableContent: any = document.getElementById("agreementDiv");
    const printWindow: any = window.open("", "", "height=1000,width=1000");
    printWindow.document.write(printableContent.innerHTML);
    printWindow.print();
  };

  const handleButton = async (e: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("id", id);
      route.push("/view-address-details");
    }
  };

  if (typeof window !== 'undefined') {
    if (!Boolean(localStorage.getItem("wsr_token"))) {
      return route.push("/");
    }
  }
  return (
    // <ProtectedRoute>
    <div className={style.confirm}>
      {/* {viewLoading ? <Spinner animation="border" variant="danger" className={style.Spinner} />: ""} */}
      <div className="container">
        <div className={style.confirmBg}>
          <h2>Confirm Agreement</h2>
          <div className={style.loginContent}>
            <p>
              To obtain the Name, Address and other Confidential Information of
              the restaurant, you must read and agree to the Confidentiality
              Agreement Below and hit the 'I Agree' Button
            </p>
          </div>
          <div id="agreementDiv" className={style.agreementBox}>
            <p>
              <strong>BROKERS REPRESENTING THIRD PARTIES</strong>
            </p>
            <p>
              <strong>– DO NOT CONTINUE –</strong>
            </p>
            <p>
              <strong>PLEASE CONTACT WE SELL RESTAURANTS INSTEAD</strong>
            </p>
            <p>
              <strong>
                <u>By clicking “I Agree” and proceeding, You agree:</u>
              </strong>
            </p>
            <ul>
              <li>
                <strong>
                  You are a Prospective Buyer and have submitted accurate and
                  complete information when registering on this site;
                </strong>
              </li>
              <li>
                <strong>
                  You will not, directly or indirectly contact Seller, its
                  agents, employees, suppliers, customers, landlord or
                  representatives with regard to this listing; and
                </strong>
              </li>
              <li>
                <strong>
                  to be bound by all of the terms of the Buyer Confidentiality
                  Agreement below.
                </strong>
              </li>
            </ul>
            <p>
              <strong>
                <u>BUYER CONFIDENTIALITY AGREEMENT</u>
              </strong>
            </p>
            <p>
              <strong>THIS BUYER CONFIDENTIALITY AGREEMENT</strong>&nbsp;(the
              “Agreement”) is executed by You in favor of Seller (as defined
              herein) and We Sell Restaurants, Inc. (“Listing Broker”) and in
              consideration for Seller and Listing Broker providing to You, Your
              agents and/or Your representatives Confidential Information and
              Trade Secrets related to Seller and Seller’s Business (as each
              term is defined herein).&nbsp; You hereby covenants and agrees as
              follows:
            </p>
            <ol>
              <li>
                <strong>Non-Disclosure of Confidential Information</strong>.
                &nbsp;For a period of two years from the date of this Agreement,
                You will not, either directly or indirectly:
              </li>
            </ol>
            <ol>
              <li>
                use the Confidential Information for any purpose other than
                evaluating the feasibility of purchasing the Business; or
              </li>
            </ol>
            <ol>
              <li value="2">
                Distribute, disclose or disseminate any Confidential Information
                to any third party, except to Your professional advisors
                (however, You shall remain liable for any unauthorized use or
                disclosure of Confidential Information by such professional
                advisors).
              </li>
            </ol>
            <ol>
              <li value="2">
                <strong>Non-Disclosure of Trade Secrets</strong>. &nbsp;For so
                long as information disclosed pursuant to this Agreement shall
                be deemed a Trade Secret under Alabama law, You will not, either
                directly or indirectly,: Disclose or use the trade secret of
                another, without a privilege to do so
                <ol>
                  <li>Discover the trade secret by improper means</li>
                  <li>
                    Disclosure or use of trade secret constitutes a breach of
                    confidence reposed in that person by the other
                  </li>
                  <li>
                    Learned the trade secret from a third person, and know or
                    should have known that the trade secret had been
                    appropriated under circumstances which violate the
                    provisions set forth
                  </li>
                  <li>
                    Learned the information and knew or should have known that
                    it was a trade secret and that its disclosure was made by
                    mistake
                  </li>
                </ol>
              </li>
            </ol>
            <ol>
              <li value="3">
                <strong>Non-Interference with Business</strong>.&nbsp; You shall
                not, directly or indirectly, disparage or otherwise interfere
                with the Business for a period of two years from the date of
                this Agreement.
              </li>
            </ol>
            <ol>
              <li value="4">
                <strong>Definitions</strong>.
              </li>
            </ol>
            <ol>
              <li>
                “<em>Confidential Information</em>” means all information
                disclosed or made available to You regarding Seller and the
                Business, including this listing terms, all financial
                information, asset and equipment lists, customer and vendor
                lists, and employee information. &nbsp;Confidential Information
                does not include Seller information to the extent that such
                information: &nbsp;(i) was, at the time of disclosure or
                thereafter becomes, generally available to the public other than
                by breach of this provision; (ii) was in Your possession prior
                to disclosure by Seller or Seller’s representatives; (iii) is
                acquired in good faith from a third party who obtained it
                lawfully and not under an obligation of secrecy; or (iv) was or
                is developed independently within Your organization by personnel
                not having access to such information.
              </li>
            </ol>
            <ol>
              <li value="2">
                <em>“Trade Secrets”</em>&nbsp;means information disclosed to You
                under this Agreement which rises to the level of a trade secret
                under the Alabama Trade Secret Act. A Trade Secret is
                information that:
                <ol>
                  <li>Is used or intended for use in a trade or business</li>
                  <li>
                    Is included or embodied in a formula, pattern, compilation,
                    computer software, drawing, device, method, technique, or
                    process
                  </li>
                  <li>
                    Is not publicly known and is not generally known in the
                    trade or business of the person asserting that it is a trade
                    secret –
                  </li>
                  <li>
                    Cannot be readily ascertained or derived from publicly
                    available information
                  </li>
                  <li>
                    Is the subject of efforts that are reasonable under the
                    circumstances to maintain its secrecy;
                  </li>
                  <li>Has significant economic value.</li>
                </ol>
              </li>
            </ol>
            <ol>
              <li value="3">
                “<em>You</em>” means the person or persons executing this
                Agreement and includes any entity controlled or under common
                control by You, whether or not now in existence.
              </li>
            </ol>
            <ol>
              <li value="4">
                “<em>Seller</em>” means the owner or owners of the Business.
              </li>
            </ol>
            <ol>
              <li value="5">
                “<em>Business</em>” means the business identified by the listing
                number in the Digital Signature Block below.
              </li>
              <li value="6">
                “PERSON.” A person is a natural person, corporation, business
                trust, estate, trust, partnership, association, joint venture,
                government, governmental subdivision or agency, or any other
                legal or commercial entity.
              </li>
            </ol>
            <ol>
              <li value="5">
                <strong>
                  Return of Confidential Information and Trade Secrets
                </strong>
                .&nbsp; You shall return all Confidential Information and Trade
                Secrets and all photocopies and electronic copies thereof to
                Listing Broker on the earlier of (i) ten (10) days after Listing
                Broker or Seller requests return or (ii) six months from the
                date you entered this Agreement.&nbsp;
              </li>
            </ol>
            <ol>
              <li value="6">
                <strong>Communications</strong>.&nbsp; You shall direct or
                submit all communications, correspondence, inquiries,
                negotiations and purchase offers relating to Seller and the
                Business exclusively through Listing Broker.&nbsp; You shall
                not, directly or indirectly, contact Seller, its agents,
                employees, suppliers, customers and representatives.&nbsp; You
                shall not visit the business without the express permission of
                Listing Broker.
              </li>
            </ol>
            <ol>
              <li value="7">
                <strong>Reasonability of Restrictions</strong>.&nbsp; You
                expressly acknowledges and agree that with respect to all
                restrictions on You contained in this Agreement, (i) You have
                read and understands the restrictions; (ii) the restrictions are
                reasonable to protect Seller’s Business; (iii) You are bound by
                and will adhere to the restrictions; and (iv) Your failure to
                adhere to these restrictions will result in damages to Seller
                for which You will be liable.
              </li>
            </ol>
            <ol>
              <li value="8">
                <strong>Agency Disclosure</strong>. We Sell Restaurants, Inc. is
                Seller’s agent and is referred to herein as “Listing
                Broker”.&nbsp; Seller will compensate Listing Broker in
                accordance with an agreement between Seller and Listing Broker.
                &nbsp;By executing this Agreement, You are requesting that
                Listing Broker also act as Your agent pursuant to a dual agency
                relationship. &nbsp;To induce Listing Broker to act as your
                agent in connection with the purchase of the Business, You
                represent and warrant to Listing Broker that:
              </li>
            </ol>
            <ol>
              <li>
                Prior to executing this Agreement, You were not aware that the
                Business is listed for sale,
              </li>
              <li>You are not currently represented by another broker,</li>
              <li>
                You have not signed any other nondisclosure agreement or
                previously contacted Listing Broker or its agents.
              </li>
              <li>You understand and agree that:</li>
            </ol>
            <ol>
              <li>
                In serving as a dual agent, Listing Broker is representing two
                clients whose interests are or at times could be different or
                even adverse;
              </li>
              <li>
                Listing Broker will disclose all known adverse, material facts
                relevant to the transaction and actually known to Listing Broker
                to all parties in the transaction, except for information made
                confidential by request or instruction from either Buyer or
                Seller, and which is not otherwise required to be disclosed by
                law;
              </li>
              <li>
                You do not have to consent to dual agency, Your consent to dual
                agency has been given voluntarily, and You have read and
                understand this Agreement.
              </li>
            </ol>
            <p>
              Notwithstanding any provision to the contrary contained herein,
              You direct Listing Broker, while acting as dual agent, to keep
              confidential and not reveal to Seller any information which could
              materially and adversely affect Your negotiating position.
            </p>
            <ol>
              <li value="9">
                <strong>Default or Breach by You.</strong>&nbsp; You acknowledge
                that Seller is an intended third party beneficiaries of this
                Agreement. &nbsp;&nbsp;Therefore, in the event of breach or
                default under this Agreement, Seller and Listing Broker shall
                both be entitled to collect from You their respective expenses
                of litigation, including their reasonable attorneys’ fees.
                &nbsp;In addition to all remedies provided at law or in equity,
                Seller shall be entitled to seek a temporary restraining order
                and a temporary and permanent injunction to prevent a breach of
                this Agreement without the requirement of posting a bond or
                other security.&nbsp;
              </li>
            </ol>
            <p>
              Without limiting Seller’s available remedies, You agree that
              because of the difficulty or impossibility of determining damages,
              should You default in the performance of Your obligations under
              Section 5 of this Agreement (Return of Confidential Information
              and Trade Secrets), and if such default continues for five (5)
              business days after notice to You, Seller shall be entitled to
              $5,000.00 as liquidated damages for such default.&nbsp; You
              further agree that should You breach any covenant set forth in
              Sections 1, 2, or 3 of this Agreement, You shall pay to Seller
              liquidated damages in the amount of $5,000.00 for each such
              breach.&nbsp; You agree that the amounts set forth herein
              represent a reasonable estimate of the damages that Seller would
              suffer and it is not meant (and will not be construed) to be a
              penalty. &nbsp;The provisions of this Section 9 shall survive the
              termination of this Agreement.
            </p>
            <ol>
              <li value="10">
                <strong>Miscellaneous</strong>.&nbsp; You agree that this
                Agreement shall be construed and enforced in accordance with the
                laws of the State of Alabama and that venue for any such action
                shall be in the County in which the principal office of the
                Business is located. &nbsp;This Agreement contains the entire
                understanding of You and Listing Broker with respect to the
                subject matter hereof and supersedes all prior oral or written
                agreements and understandings of You and Listing Broker relating
                to the subject matter hereof. &nbsp;If You are an entity, then
                the person signing on behalf of You shall also be bound
                individually.
                <br />
                &nbsp;&nbsp;
              </li>
              <li value="11">
                <strong>Term of Representation</strong>.&nbsp; Broker shall
                represent Me for a period of one year from the date of this
                Agreement with regard to the Business.&nbsp; If Broker's
                representation of Me terminates during this period, and I
                purchase all or part of the Business, or if I make a loan to or
                invest in the Business any way, then Broker shall be due a
                commission equal to 12% of the consideration paid, loaned or
                invested in the Business but in no case less than a minimum
                amount of $12,000 (the "Commission"). If Broker’s representation
                of Me terminates during this period and I lease all or part of
                the premises whether or not I acquire the business, then Broker
                shall be due a commission equal to the greater of $5.00 per
                square foot or 4% of the gross amount of the initial
                lease.&nbsp; In such event, Broker shall first seek to be paid
                such commission from the new listing broker for the Business or
                Landlord, or, if there is no new listing broker, from the
                Business and the Seller.&nbsp; In the event Seller, Business,
                Landlord and the new listing broker do not pay Broker the full
                Commission, then Buyer shall pay Broker at time of closing (if a
                sale) or at the time of each payment (if a loan or an
                investment), a commission equal to 12% of the consideration
                paid, loaned or invested in the Business or&nbsp; in the event
                of a lease, a commission equal to the greater of $5.00 per
                square foot or 4% of the gross amount of the initial lease term
                at the time of occupancy of the leased premises.&nbsp; These
                commission obligations set forth in this Section shall survive
                termination of this Agreement.
              </li>
            </ol>
            <ol>
              <li value="11">
                <strong>Severability</strong>. &nbsp;It is expressly agreed that
                any term or provision of this Agreement that is invalid or
                unenforceable in any situation in any jurisdiction shall not
                affect the validity or enforceability of the remaining terms and
                provisions hereof or the validity or enforceability of the
                offending term or provision in any other situation or in any
                other jurisdiction. &nbsp;If any one or more of the provisions
                contained in this Agreement shall, for any reason, be held to be
                excessively broad as to time, duration, geographical scope,
                activity or subject, it shall be construed by limiting and
                reducing it so as to be enforceable to the fullest extent
                permitted under the applicable law.
              </li>
            </ol>
            <ol>
              <li value="12">
                <strong>Survival</strong>. &nbsp;This Agreement does not
                obligate You to purchase the Business or any of the assets of
                the Business; however, the terms of this Agreement shall survive
                for the time periods set forth in this Agreement. &nbsp;In the
                event that You purchase the Business, this Agreement shall
                survive the closing, and in the event of a conflict between this
                Agreement and a subsequent purchase agreement, the terms of such
                purchase agreement shall govern.
              </li>
            </ol>
            <p>&nbsp;</p>
          </div>

          <div className={style.loginLeft}>
            <p className={style.heading}>
              DIGITAL SIGNATURE REQUIRED TO PROCEED.
            </p>
            {data?.data?.map((ele: any, ind: any) => {
              return (
                <div key={ind}>
                  <p>
                    <b>Date & Time:</b>
                    <span>{ele["Date & Time"]}</span>
                  </p>
                  <p>
                    <b>Your Full Name:</b>
                    <span>{ele.Name}</span>
                  </p>
                  <p>
                    <b>Your Computer Id:</b>
                    <span>{ele["Computer Id"]} </span>
                  </p>
                  <p>
                    <b>Listing:</b>
                    <span>{ele.listing}</span>
                  </p>
                  <p>
                    <b>Description:</b>
                    <span>{ele.Description}</span>
                  </p>
                </div>
              );
            })}

            <div className={style.txtDetails}>
              {soldStatus === "sold" ? (
                <button disabled>
                  CLICK HERE If you Agree to the Terms in the "Confidentiality
                  Agreement & Disclaimer" above.
                </button>
              ) : (
                <button onClick={handleButton} disabled={loading}>
                  CLICK HERE If you Agree to the Terms in the 'Confidentiality Agreement & Disclaimer' above.
                </button>
              )}
            </div>
            <div className={style.pdfLink}>
              <Link href="#" onClick={toggleAndPrint}>
                <Image src={Pdf} alt="pdfImg" className="img-responsive" />
                Print "CONFIDENTIALITY AGREEMENT & DISCLAIMER"
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </ProtectedRoute>
  );
}
