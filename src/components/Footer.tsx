'use client'
import React from 'react'
import Link from 'next/link'


import Location from './Location'



export default function Footer() {
	return (
		<div className="w-full bottom-0 bg-gray-100  text-gray-500 text-base">
			<div className="border-b ">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col sm:flex-row items-center justify-between p-4 py-3">
						<div className="flex cursor-pointer items-center space-x-5">
             <Location />
						</div>
						<div className="flex cursor-pointer items-center space-x-5">
							<p className="customLink">
								오픈소스 코드 -
								<Link
									href="https://github.com/saddamarbaa/google-clone-app-nex-js-typescript"
									passHref={true}
									legacyBehavior={true}>
									<a
										target="_blank"
										className="font-bold text-blue-500 hover:underline">
										{'  Github Repo'}
									</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col sm:flex-row items-center justify-between p-4 py-2">
					<div className="flex cursor-pointer items-center space-x-5">
						<p className="customLink">회사소개</p>
						<p className="customLink"> 광고기준</p>
						<p className="customLink">채용공고</p>
						<p className="customLink hidden sm:inline">봇치의 작동방식(검색)</p>
					</div>
					<div className="flex cursor-pointer items-center space-x-5 m-5">
						<p className="customLink"> 이용약관 </p>
						<p className="customLink"> 봇치 정책</p>
						<p className="customLink"> 설정</p>
					</div>
				</div>
			</div>
		</div>
	)
}
