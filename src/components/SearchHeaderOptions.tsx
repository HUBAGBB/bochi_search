'use client'

import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'
import { AiFillCamera } from 'react-icons/ai'
import { FiPlay } from 'react-icons/fi'
import { BiMap, BiNews } from 'react-icons/bi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import HeaderOption from './HeaderOption'

export default function Page() {
	const pathName = usePathname()
	const searchPrams = useSearchParams()
	const term = searchPrams?.get('searchTerm') || ''
	const router = useRouter()
	const handleSelectTab = (text: string) => {
		router.push(`/search/${text}?searchTerm=${term}`)
	}

	return (
		<>
			<div className="mx-auto flex w-full max-w-7xl items-center justify-around  space-x-6  px-5 py-2 text-gray-700">
				<div className="flex items-center space-x-6 ">
					<div onClick={() => handleSelectTab('web')}>
						<HeaderOption
							Icon={BsSearch}
							title="전체"
							selected={pathName === '/search/web'}
						/>
					</div>
					<div onClick={() => handleSelectTab('image')}>
						<HeaderOption
							Icon={AiFillCamera}
							title="이미지"
							selected={pathName === '/search/image'}
						/>
					</div>
					<div className="hidden xl:inline-flex">
						<HeaderOption
							Icon={FiPlay}
							title="동영상"
							selected={pathName === '/search/video'}
						/>
					</div>

					<div onClick={() => handleSelectTab('web')}>
						<HeaderOption
							Icon={BiNews}
							title="뉴스"
							selected={pathName === '/search/news'}
						/>
					</div>

					<div onClick={() => handleSelectTab('image')}>
						<HeaderOption Icon={BiMap} title="지도" />
					</div>

					<div
						className="hidden xl:inline-flex"
						onClick={() => handleSelectTab('web')}>
						<HeaderOption Icon={HiDotsVertical} title="더보기" />
					</div>
				</div>

				<p
					onClick={() => handleSelectTab('web')}
					className="hidden cursor-pointer xl:inline-flex">
					도구
				</p>

				<p
					onClick={() => handleSelectTab('web')}
					className="hidden cursor-pointer xl:inline-flex">
					{' '}
					봇치는 세이프서치를 우회합니다!
				</p>
			</div>
			<div className=" w-full  border-t"></div>
		</>
	)
}
