/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blog from "../components/Blog/Blog";
import ShowAllToy from "../components/ShowAllToy/ShowAllToy";
import SingelToyDetails from "../components/SingelToyDetails/SingelToyDetails";
import AddToy from "../components/AddToy/AddToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/MyToys/UpdateToy";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/singup",
				element: <Register />,
			},
			{
				path: "/show-all-toy",
				element: <ShowAllToy />,
			},
			{
				path: "/toy/:id",
				element: (
					<PrivateRoute>
						<SingelToyDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://eleven-assignment-server.vercel.app/toy/${params.id}`),
			},
			{
				path: "/add-toy",
				element: (
					<PrivateRoute>
						<AddToy />
					</PrivateRoute>
				),
			},
			{
				path: "/my-toys",
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				),
			},
			{
				path: "/update-toy/:id",
				element: (
					<PrivateRoute>
						<UpdateToy />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://eleven-assignment-server.vercel.app/toy/${params.id}`),
			},
		],
	},
]);

export default router;
