import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, } from 'react-icons/io5'
import { AiOutlineDollarCircle,SiGooglemarketingplatform } from 'react-icons/ai'


export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Stablecoin Supply</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-500 font-semibold">$73.22B</strong>
						<span className="text-sm text-green-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Stablecoin TVL</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-500 font-semibold">$8.05%</strong>
						<span className="text-sm text-green-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">TVL Change 7D</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-500 font-semibold">-3.65%</strong>
						<span className="text-sm text-red-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<AiOutlineDollarCircle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">USDC Dominance</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-500 font-semibold">53.20%</strong>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
