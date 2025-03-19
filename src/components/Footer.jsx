import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white">
      <footer className="footer sm:footer-horizontal p-10 w-11/12 mx-auto max-w-screen-xl">
        {/* Stock Market Services */}
        <nav>
          <h6 className="footer-title text-lg text-white">Stock Services</h6>
          <a className="link link-hover">Market Analysis</a>
          <a className="link link-hover">Investment Planning</a>
          <a className="link link-hover">Portfolio Management</a>
          <a className="link link-hover">Stock Advisory</a>
        </nav>

        {/* Company Information */}
        <nav>
          <h6 className="footer-title text-lg text-white">Janata Stocks</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Investor Relations</a>
          <a className="link link-hover">Careers</a>
        </nav>

        {/* Legal Policies */}
        <nav>
          <h6 className="footer-title text-lg text-white">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Risk Disclosure</a>
        </nav>

        {/* Newsletter Subscription */}
        <form>
          <h6 className="footer-title text-lg text-white">Market Updates</h6>
          <fieldset className="w-80">
            <label className="text-sm">Get the latest stock market trends</label>
            <div className="join mt-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn bg-white text-blue-900 hover:bg-blue-700 hover:text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-400">
        <p>© {new Date().getFullYear()} Janata Stocks. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
