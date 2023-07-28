import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'xyz',
		product_thumbnail: 'https://plus.unsplash.com/premium_photo-1688700438084-1936c52670df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'xyz',
		product_thumbnail: 'https://plus.unsplash.com/premium_photo-1688700438084-1936c52670df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'xyz',
		product_thumbnail: 'https://plus.unsplash.com/premium_photo-1688700438084-1936c52670df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'xyz',
		product_thumbnail: 'https://plus.unsplash.com/premium_photo-1688700438084-1936c52670df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'zyz',
		product_thumbnail: 'https://plus.unsplash.com/premium_photo-1688700438084-1936c52670df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		product_price: '$699.00',
		product_stock: 5656
	},
	{
		id: '4342',
		product_name: 'xyz',
		product_thumbnail: 'https://plus.unsplash.com/premium_photo-1688700438084-1936c52670df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		product_price: '$399.00',
		product_stock: 453
	}
]

function PopularProducts() {
	return (
		<div className="w-[20rem] bg-black-gradient p-4 rounded-md shadow-xl">
			<strong className="text-white-700 font-bold text-gradient">#Top 100 Stablecoin Holder</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-black-gradient rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-white-700">{product.product_name}</p>
							<span
								className={classNames(
									product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
