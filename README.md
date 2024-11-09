This project is an attempt to get rust api functions working with Vercel.

Information to build this was taken from the following sources: [A Medium post](https://dev.to/capjavert/integrating-rust-into-nextjs-how-to-developer-guide-4jo6) and the [repo](https://github.com/vercel-community/rust) for the Rust community package.

## Getting Started
I am making us of the Vercel command line tool to use this locally and have changed the `package.json` file so that the rust and the NextJS code can be run locally.  When deployed to Vercel this should build the pages and the api endpoint. 

Open [http://localhost:3000/api/handler](http://localhost:3000) with a browser to see the result of the rust api call.

