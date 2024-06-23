import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import { SearchResult } from '@/types/search'
import Pagination from './Pagantion'
import { Image } from '@nextui-org/react'

type Props = {
	searchTerm: string
	searchResult: SearchResult
}

const imgSrc = "item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src"

export default function WebSearchResult({ searchResult, searchTerm }: Props) {
	return (
		<div className="mx-auto mt-3 w-full max-w-7xl px-5 py-2  pb-64 sm:pb-52 sm:pl-[5%]">
			<div className="flex flex-col space-y-5">
				{searchResult?.items?.map((item) => {
					return (
						<div
							className="group flex max-w-xl flex-col space-y-1"
							key={item.link}>
								<div>
							<div className="float-left">
							<Link
								href={item?.link}
								className="cursor-pointer text-sm text-gray-500 hover:underline">
								{item?.displayLink}
							</Link>
							</div>
								</div>
							<Link
								className="truncate  font-semibold  text-blue-800   decoration-blue-800 group-hover:underline sm:text-xl"
								href={item.link}>
								{item?.title}
							</Link>
							<p>{Parser(item.htmlSnippet)}</p>
						</div>
					)
				})}
				<Pagination />
			</div>
		</div>
	)
}
