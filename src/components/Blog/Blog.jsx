import React from 'react';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import useTitle from '../../CustomHooks/useTitle/useTitle';

const Blog = () => {
	useTitle('Blogs')
    return (
		<div>
			<NavBar />
			<div className='page-container my-5 flex flex-col gap-5'>
				<div className='bg-gray-200 p-3 rounded-md'>
					<h2 className='font-bold'>
						Q1. What is an access token and refresh token? How do
						they work and where should we store them on the
						client-side?
					</h2>
					<p>
						<span className='font-bold'>Access Token:</span>
						<br /> An access token is a credential that is issued to
						a client (e.g., a user or an application) after
						successful authentication. It contains information about
						the client's identity and permissions and is used to
						authorize and access protected resources on a server.
						Access tokens are typically short-lived and have an
						expiration time. Once expired, they need to be refreshed
						to continue accessing protected resources. <br />
						<br />
						<span className='font-bold'>
							Refresh Token:
						</span> <br /> A refresh token is a long-lived
						credential that is also issued to a client during
						authentication. Unlike access tokens, refresh tokens
						have a longer expiration period and can be used to
						obtain a new access token when the current one expires.
						Refresh tokens are securely stored by the client and are
						used to request a new access token from the
						authentication server without the need for
						re-authentication.
					</p>
				</div>
				<div className='bg-[rgba(233,74,74,0.3)] p-3 rounded-md'>
					<h2 className='font-bold'>
						Q2. Compare SQL and NoSQL databases?
					</h2>
					<div className='flex items-center gap-3'>
						<p>
							<span className='font-bold'>SQL Databases</span>
							<ul>
								<li>Structured (tables, rows, columns)</li>
								<li>Vertically scalable</li>
								<li>Rigid schema enforcement</li>
								<li>Structured Query Language (SQL)</li>
								<li>Supports complex joins across tables</li>
							</ul>
						</p>
						<p>
							<span className='font-bold'>NoSQL Databases</span>
							<ul>
								<li>
									Various data models (key-value, documents,
									column-family, graphs)
								</li>
								<li>Horizontally scalable</li>
								<li>Flexible or schema-less</li>
								<li>Varies depending on the database type</li>
								<li>
									Typically no or limited support for joins
								</li>
							</ul>
						</p>
					</div>
				</div>
				<div className='bg-[rgba(209,143,0,0.3)] p-3 rounded-md'>
					<h2 className='font-bold'>
						Q3. What is express js? What is Nest JS (google it)?
					</h2>
					<p>
						NestJS provides a more structured and opinionated
						approach, which can make it easier to build complex APIs
						with proper separation of concerns. Express, on the
						other hand, is more lightweight and flexible, which
						makes it a popular choice for simple or small-scale APIs
					</p>
				</div>
				<div className='bg-[rgba(59,131,246,0.3)] p-3 rounded-md'>
					<h2 className='font-bold'>
						Q4. What is MongoDB aggregate and how does it work
						(google it)?
					</h2>
					<p>
						MongoDB's aggregation framework is a powerful tool that
						allows for advanced data processing and analysis within
						the database. It provides a way to perform complex
						operations, such as grouping, filtering, joining, and
						transforming data, in a highly efficient manner. The
						aggregation framework operates on a collection of
						documents and returns the computed results.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Blog;