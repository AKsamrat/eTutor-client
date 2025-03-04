import { Button } from "@/components/ui/button";


const FaqPage = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl mx-auto">Frequently Asked Questions</h2>
        <p className="mt-4 mb-8 dark:text-gray-600 mx-auto">Would you like help finding a better tutor or platform recommendations</p>
        <div className="mx-auto flex justify-center items-center ">

          <div className="max-w-md  flex-grow my-6">
            <input
              type="text"
              placeholder="Place your question"
              className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
            />
          </div>
          <Button className="rounded-full">Search</Button>
        </div>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold">How do I find a tutor?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Online Platforms: Websites like Wyzant, Chegg Tutors, Preply, Varsity Tutors, and TutorMe offer tutors for various subjects. <br />
              Local Listings: Check community boards, libraries, or local Facebook groups. <br />
              Educational Institutions: Many schools and colleges have tutoring centers or peer tutoring programs. <br />
              Message tutors and ask about their teaching style, availability, and rates. <br />
              Request a trial session to see if they’re a good fit.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold">How are payments processed?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">1. Online Tutoring Platforms<br />
              If you hire a tutor through platforms like Wyzant, Preply, Varsity Tutors, or Chegg Tutors, payments are handled securely through the platform.<br />

              Payment Methods: Credit/debit cards, PayPal, or direct bank transfers.
              Billing Type: Some charge per session, per hour, or through a subscription model.<br />
              Escrow System: Many platforms hold payments until the session is completed to protect both the tutor and the student.<br />
              2. Direct Payments to Tutors<br />
              If you hire a tutor independently, you may need to arrange payment directly. Common methods include:<br />

              Cash (for in-person tutoring)
              Bank Transfers
              Venmo, PayPal, or Zelle
              Cryptocurrency (rare, but some tutors accept it)<br />
              3. Subscription-Based Learning<br />
              Some platforms offer monthly or yearly subscriptions, giving you access to multiple tutors or courses instead of paying per session. Examples include Skillshare, MasterClass, and some Coursera Plus plans.<br />

              4. Payment Policies to Check
              Before booking, clarify:<br />
              ✅ Refund Policy: Can you get a refund if the session is canceled or unsatisfactory?<br />
              ✅ Cancellation Fees: Are you charged for last-minute cancellations?<br />
              ✅ Payment Security: Always use secure payment methods to avoid scams. <br /></p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold">Can I cancel a session?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes you can cancel session </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold">What if Im not satisfied with my tutor?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">1. If You Hired Through a Tutoring Platform: <br />
              Most platforms have satisfaction guarantees or refund policies: <br />
              ✅ Request a refund or credit  Some platforms (like Wyzant, Preply, or Varsity Tutors) offer a first-lesson satisfaction guarantee, meaning you won t be charged if you re unhappy. <br />
              ✅ Switch tutors  Many platforms allow you to browse and select a new tutor without extra fees.<br />
              ✅ Leave feedback  Reviewing your experience helps improve tutor matching.<br />

              2. If You Hired an Independent Tutor:<br />
              ✅ Discuss concerns directly  A good tutor will appreciate constructive feedback and adjust their approach.<br />
              ✅ Try another session Sometimes, it takes a few lessons to see improvement.<br />
              ✅ Negotiate a refund  If the tutor didnt meet expectations, ask if theyre willing to refund part or all of the payment.<br />

              3. If Youre Using a Subscription Service (Like Chegg or Skillshare):<br />
              ✅ Cancel your subscription  If the service doesnt meet your needs, check if youre eligible for a refund or trial extension.<br />
              ✅ Try different tutors  Some platforms offer multiple tutors, so switching is an option. </p><br />
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;