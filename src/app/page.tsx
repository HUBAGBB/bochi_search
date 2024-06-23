'use client' 
import HomeHeader from '@/components/HomeHeader'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiMicrophone} from 'react-icons/hi'
import {Image} from "@nextui-org/react";
import {useState} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@nextui-org/react";
import {useRouter} from 'next/navigation'
import {Button, ButtonGroup} from "@nextui-org/button";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState < string | '' > ('')
    const [isLoading, setIsLoading] = useState < boolean > (false)
    const router = useRouter()
    const handleSubmit = (event : React.FormEvent < HTMLFormElement >) => {
        event.preventDefault()
        if (searchTerm && searchTerm.trim()) {
            router.push(`/search/web?searchTerm=${searchTerm}`)
            setSearchTerm('')
        }
    }
    const randomSearch = async () => {
        setIsLoading(true)
        const response: string = await fetch('https://random-word-api.herokuapp.com/word',).then((res : Response) => res.json()).then((data : string[]) => {
            setIsLoading(false)
            return data[0]
        })
        if (response) {
            router.push(`/search/web?searchTerm=${response}`)
            setSearchTerm('')
        }
    }
    return (<main className="flex min-h-screen flex-col">
        <HomeHeader/>
        <div className="pb-64 sm:pb-52 flex-1 px-5">
            <form className="flex flex-col items-center"
                onSubmit={handleSubmit}>
                <div className="max-md flex w-full items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow hover:border-gray-300  hover:shadow md:max-w-[650px]">
                    <AiOutlineSearch className="mr-3 cursor-pointer text-xl text-gray-500 transition duration-150 ease-in-out"/>
                    <input type="text" name="" id="" placeholder="검색어를 입력해 주세요!" className="flex-grow focus:outline-none"
                        value={searchTerm}
                        onChange={
                            (e) => setSearchTerm(e.target.value)
                        }/>
                    <HiMicrophone className="h-5"/>
                </div>
                <div>
                    <div className="mt-10 mr-8 hidden float-left md:inline">
                        <Card className="col-span-12 sm:col-span-4 h-[110px]">
                            <Image removeWrapper alt="Card background" className="z-0 h-full" src="https://ssl.pstatic.net/melona/libs/1500/1500839/922defddca4d1f9be9e4_20240531151404823_1.jpg"/>
                        </Card>
                        <Card className="h-full mt-4">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <Breadcrumbs className='ml-2' separator="/"
                                        itemClasses={
                                            {
                                                separator: "px-2"
                                            }
                                    }>
                                        <BreadcrumbItem>뉴스 홈</BreadcrumbItem>
                                        <BreadcrumbItem>변경사항</BreadcrumbItem>
                                        <BreadcrumbItem>공지</BreadcrumbItem>
                                    </Breadcrumbs>
                                    
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <Card className='w-full' radius='sm'>
                                    <CardBody>
                                        <p>해당 사이트는 아직 테스트 단계이므로 알려지지 않은 버그나 미숙한 부분이 많습니다.</p>
                                    </CardBody>
                                </Card>
                                
                            </CardFooter>
                            <Divider/>
                            <div className="flex m-auto p-3 cursor-pointer">
                                <p className='text-blue-500'>공지&nbsp;</p>
                                <p>더보기 1</p>
                                <p className='text-gray-500'>/21</p>
                            </div>
                        </Card>
                        <Card className="h-full mt-4">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-md ml-2">커뮤니티 바로가기</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <div className="flex flex-col ml-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/5U7HeWFuUaVLohm0yC9KK9IihoW9_pIRcVN9jdYWiltLaziTINqJFgJlLeFvO67OEveOTyI54xNsgP_kCN-Pxg.svg"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/DXVSECK9Zj_u4Gn7qivjbnW-5j7NsWjUX0wmhrmaPX-maQnTAlZp0-tDo6ki02rrb200yZlPmdKSFgj3ExecVg.svg"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/-EOPzfOdsH6wqGebXaKSmKxWS94qR8zBdDg89OM4y5hBds44-q17Kqrs6gC1Iy8EBkklj4AKEwzIC6FsUhgF0w.webp"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://d2u3dcdbebyaiu.cloudfront.net/img/companyPage_kr/logo_9384.jpg"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLxk_MfoT5fzardQ26Qj_qKM4FHbaeiAhDA&s"
                                        width={80}/>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="h-full mt-4">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-md ml-2">19+ 사이트 바로가기 (블러처리)</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter className='blur-sm'>
                                <div className="flex flex-col ml-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/vssm8coCH_uxiV8eVDcwKcP-ik1PCWY88rrNCgqYpp2JAVEKVTGTZL0h5aS-e6gD6uzKn_thlhYTh2hgVKLqTA.webp"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://store-images.s-microsoft.com/image/apps.4067.6a8d154d-aacf-4753-a365-3c6bbd81d358.347d8aeb-bfd2-406b-bfad-fab842ee5f47.9c85efc9-a4a6-4e27-8bb3-9ff4c0cb83a0"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://img.telemetr.io/c/21yaRh/5269502621528475286?ty=l"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcbt2eiu0qr5WHMYp3O_nlAA2TTN2sxuklQ&s"
                                        width={80}/>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="h-full mt-4">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-md ml-2">프리미엄 배너</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                            <Image alt="nextui logo"
                                    height={100}
                                    width={500}
                                    radius="sm"
                                    className='z-0 ml-44 object-cover'
                                    src="https://embed.pixiv.net/artwork.php?illust_id=115207555&mdate=1705338314"/>
                                <div className="absolute flex flex-col ml-10">
                                    <p className="text-3xl">54만명 규모의 스트리머 팬카페!</p>
                                    <p className="text-2xl mt-5 text-orange-300">"왁물원"</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="mt-10 float-left">
                        <Card className="max-w-[400px]">
                            <CardHeader className="flex gap-3">
                                <Image alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src="https://mblogthumb-phinf.pstatic.net/MjAyMzAxMjZfMzkg/MDAxNjc0NzMyNjc1NzIx.M6Xk5s_2Q_EXTi_6FnZmkp7RD9QxeToV4ZlSAqGEUjgg._t38_hztJlAsUhcAF_DD4mZ-aAN4-nIiH4tRPHfjbcYg.PNG.tjehdrms0908/SE-792ed89b-c76c-4736-9695-05e8e378a4e8.png?type=w800"
                                    width={40}/>
                                <div className="flex flex-col">
                                    <p className="text-md md:text-sm">검열이 없는 봇치를 더 편리하게 이용하세요!</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <Button color="primary" radius="md" className='w-full' href="/sign-in"
                                    as={Link}>
                                    봇치 로그인
                                </Button>
                            </CardFooter>
                            <div className="m-auto mb-4">
                                <Breadcrumbs separator="|"
                                    itemClasses={
                                        {
                                            separator: "px-2"
                                        }
                                }>
                                    <BreadcrumbItem>아이디 찾기</BreadcrumbItem>
                                    <BreadcrumbItem>비밀번호 찾기</BreadcrumbItem>
                                    <BreadcrumbItem>회원가입</BreadcrumbItem>
                                </Breadcrumbs>
                            </div>
                        </Card>
                        <Card className="max-w-[400px] mt-4">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-md ml-2">날씨</p>
                                </div>
                                <Button radius="full" variant="bordered" size='sm'>
                                    예보 비교
                                </Button>
                                <p className="font-thin ml-auto mr-2 text-sm">서울시 강남동</p>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <Image alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    className='z-0 ml-3'
                                    src="https://cdn.icon-icons.com/icons2/1128/PNG/512/1486164734-123_79714.png"
                                    width={80}/>
                                <div className="flex flex-col ml-5">
                                    <p className="text-2xl">22.3°</p>
                                    <p className="text-small text-default-500">흐림</p>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <p className="text-lg">최소 21° / 최대 26°</p>
                                    <p className="text-lg text-blue-500">미세먼지 좋음</p>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="max-w-[400px] mt-4">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-md ml-2">증시</p>
                                </div>
                                <Popover placement="right">
                                    <PopoverTrigger>
                                        <Button radius="full" variant="bordered" size='sm' isIconOnly aria-label="Like" className="text-sm">
                                            i
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">봇치 증시</div>
                                            <div className="text-tiny">로그인 시 관심 종목의 주가를 확인할 수 있습니다.</div>
                                            <div className="text-tiny">로그아웃 시 인기 검색 종목이 제공됩니다.</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <p className="text-sm ml-auto mr-2">06.23. 04:26 기준</p>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <div className="flex flex-col ml-2">
                                    <p className="text-small text-default-500">나스닥</p>
                                    <p className="text-2xl">17,689.89</p>
                                    <p className="text-small text-blue-500">▼32.23 -0.18%</p>
                                    <img src="https://ssl.pstatic.net/imgfinance/chart/mobile/world/mini/.IXIC_naverpc_l.png" alt="" className="w-[180px]"/>
                                </div>
                                <div className="flex flex-col ml-auto mr-3">
                                    <p className="text-sm m-2 text-right">하이브&emsp;200,000</p>
                                    <Divider/>
                                    <p className="text-sm m-2 text-right">삼성전자&emsp;80,000</p>
                                    <Divider/>
                                    <p className="text-sm m-2 text-right">HLB&emsp;&emsp;64,300</p>
                                    <Divider/>
                                    <p className="text-sm m-2 text-center">인기종목 더보기</p>
                                </div>
                            </CardFooter>
                        </Card>
                        <Image width={400}
                            alt="NextUI hero Image"
                            className='mt-4'
                            src="https://ssl.pstatic.net/melona/libs/1500/1500000/beb915149c13c6bbb16b_20240611163138086.jpg"/>
                        <Card className="h-full mt-4 block md:hidden">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-sm ml-2">봇치 인기 사이트 바로가기 (커뮤니티)</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <div className="flex flex-col mr-5 ml-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/5U7HeWFuUaVLohm0yC9KK9IihoW9_pIRcVN9jdYWiltLaziTINqJFgJlLeFvO67OEveOTyI54xNsgP_kCN-Pxg.svg"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/DXVSECK9Zj_u4Gn7qivjbnW-5j7NsWjUX0wmhrmaPX-maQnTAlZp0-tDo6ki02rrb200yZlPmdKSFgj3ExecVg.svg"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/-EOPzfOdsH6wqGebXaKSmKxWS94qR8zBdDg89OM4y5hBds44-q17Kqrs6gC1Iy8EBkklj4AKEwzIC6FsUhgF0w.webp"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://d2u3dcdbebyaiu.cloudfront.net/img/companyPage_kr/logo_9384.jpg"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLxk_MfoT5fzardQ26Qj_qKM4FHbaeiAhDA&s"
                                        width={80}/>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="h-full mt-4 block md:hidden">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-sm ml-2">봇치 인기 사이트 바로가기 (헨타이)</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardFooter>
                                <div className="flex flex-col mr-5 ml-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://i.namu.wiki/i/vssm8coCH_uxiV8eVDcwKcP-ik1PCWY88rrNCgqYpp2JAVEKVTGTZL0h5aS-e6gD6uzKn_thlhYTh2hgVKLqTA.webp"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://store-images.s-microsoft.com/image/apps.4067.6a8d154d-aacf-4753-a365-3c6bbd81d358.347d8aeb-bfd2-406b-bfad-fab842ee5f47.9c85efc9-a4a6-4e27-8bb3-9ff4c0cb83a0"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://img.telemetr.io/c/21yaRh/5269502621528475286?ty=l"
                                        width={80}/>
                                </div>
                                <div className="flex flex-col ml-auto mr-5">
                                    <Image alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        className='z-0'
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcbt2eiu0qr5WHMYp3O_nlAA2TTN2sxuklQ&s"
                                        width={80}/>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    </main>)
}