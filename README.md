# Angular Tutorial

https://angular.io/tutorial

## 1. Introduction

#### Create Project

`ng new my-app`

ng-cli를 사용

## 2. The Hero Editor

#### Show the Hero: Property 추가 및 사용

![](https://api.monosnap.com/rpc/file/download?id=MZYbll2A7MROTkUVBextpKtg4wEs0o)

#### Hero Object: Class 추가 및 사용

![](https://api.monosnap.com/rpc/file/download?id=WSXA3piMkFsWro1QPNwoAIVZlNIhrg)

#### Edit Hero Name: 2way binding

![](https://api.monosnap.com/rpc/file/download?id=Tsas43hwI2fjGxZNaav6RsKgdJJNL5)

![](https://api.monosnap.com/rpc/file/download?id=rr29PPO3Gqhvax0F9mmdfGNutJUorN)

## 3. Master/Detail

#### Displaying heroes: ngFor

![](https://api.monosnap.com/rpc/file/download?id=5lciCFlc2XNBqw2i28UhnfeeLWEVy9)

![](https://api.monosnap.com/rpc/file/download?id=7JuiZoxR6CKJTlmgAIrsXQsetajvGK)

#### Selecting a hero

![](https://api.monosnap.com/rpc/file/download?id=l0iGGLjxs15vgvMQGcYfvblQMlcmeL)

- Handle click events: (click)="onSelect(hero)"
- Style the selected hero([class.selected]="hero === selectedHero")

![](https://api.monosnap.com/rpc/file/download?id=EpTHnUq6bdeZarhOiplOuMrEvAzhOq)

- Add a click handler(onSelect) to expose the selected hero

![](https://api.monosnap.com/rpc/file/download?id=i0nUVmGimtEwBNvNhGqYZKd09Bo4ZJ)

- Hide the empty detail with ngIf

## 4. Multiple Components

#### ng g c HeroDetail

![](https://api.monosnap.com/rpc/file/download?id=KF4dW4eiPT0YcfW85eYHp0j9uKG8O1)

#### The hero property is an input property

multiple components

- move hero detail html to hero-detail
- declare hero property
- move Hero class to hero.ts

![](https://api.monosnap.com/rpc/file/download?id=0X83BVbDfSCQuAJuuAdG6yURUPmhYk)

- make hero property as input property in HeroDetailComponent
	- Putting square brackets around the hero property, to the left of the equal sign (=), makes it the target of a property binding expression. You must declare a target binding property to be an input property. Otherwise, Angular rejects the binding and throws an error.

![](https://api.monosnap.com/rpc/file/download?id=XoQu0Fzc5lQliY1GN4EZxrwUOdiULE)

- read comments on app.component.html(target input property...)

## 5. Services

#### ng g s Hero

#### Add Service

![](https://api.monosnap.com/rpc/file/download?id=IP2XeuvPc9wzpSJNmJtrlldqKwvmLq)

- move mock data to mock-heroes.ts

![](https://api.monosnap.com/rpc/file/download?id=2NLbzzuncidR5AXPIPhEXhezobmRPu)

![](https://api.monosnap.com/rpc/file/download?id=V7jIqHIE9zksi464NiZsJyJVyeCPI7)

> When using a remote server, users don't have to wait for the server to respond; additionally, you aren't able to block the UI during the wait.
> To coordinate the view with the response, you can use Promises, which is an asynchronous technique that changes the signature of the getHeroes() method.
> A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to do some work and give it a callback function. The service does that work and eventually calls the function with the results or an error.

- add 'providers: [HeroService]' to app.component.ts in order to use constructor injection
- add OnInit and call getHeroes(not in constructor)
	- Pass the callback function as an argument to the Promise's then() method:

#### setTimeout to simulate slow N/S

![](https://api.monosnap.com/rpc/file/download?id=NG4eNKvpgxM83QwQz0bMtMWGyBDgyG)

## 6. Routing

#### Splitting the AppComponent

- rename app.component.ts to heroes.component.ts
- add app.component.ts
- add HeroesComponent to app.module.ts in @NgModule

#### Add routing: configure router

![](https://api.monosnap.com/rpc/file/download?id=hMIjCDOK8fKr1boYDX843GTwOqee8W)

- add RouterModule.forRoot in app.module(imports)

#### apply router-outlet

![](https://api.monosnap.com/rpc/file/download?id=8vxdeE6lrcDGk0bjQbxajX9ICZj9UB)

#### ng g c Dashboard

#### dashboard router

![](https://api.monosnap.com/rpc/file/download?id=JSmYZZ47UXqfRE3GdjBaHk9264vJS8)

- add dashboard and default router including redirection
- implement dashboard.component.html
- implement dashboard.component: DI, ngOnInit

![](https://api.monosnap.com/rpc/file/download?id=5sCMR7R9oeUOEUEIIdb9UgUcKJfQQ8)

- modify app.components.ts(template)

#### route for hero detail by id

![](https://api.monosnap.com/rpc/file/download?id=kcjjtsIg7ryFvJP9E5dgFOGr4UactF)

- move html to hero-detail.component.html(add button for goBack)
- rxjs switchMap, ActivatedRoute paramMap to handle by Id

![](https://api.monosnap.com/rpc/file/download?id=zHAUhDhXBFjOKohlXghaJAhMjrR0bw)

- add route for by Id

![](https://api.monosnap.com/rpc/file/download?id=mDXKliLhzSIFyg1uk8cy1dC78bwAus)

- add getHero by Id in HeroService

#### Refactor routes to a Routing Module

![](https://api.monosnap.com/rpc/file/download?id=81KtCwqoqFEFS6rWus1J8UduCpSIkB)

- change div to a(with routerLink)

![](https://api.monosnap.com/rpc/file/download?id=cOA8fwdz9bM3dEH57WMG3LeV4vm1SW)

- extract routes(AppRoutingModule)

![](https://api.monosnap.com/rpc/file/download?id=bxXSuyVTYEowCXkmCZys35fDQAgfDM)

- remove routes in app.module

#### extract css, html to its own file for HeroesComponent

#### implement gotoDetail using Router

![](https://api.monosnap.com/rpc/file/download?id=MwEiar2wx7VE5tFvtCSSf0j90226gu)

#### apply styles

![](https://api.monosnap.com/rpc/file/download?id=zWjH6hnkowZqd5MCvWP5dacvCPA78m)

#### remove experimentalDecorators warning

![](https://api.monosnap.com/rpc/file/download?id=V6wiDLpeiOZpZ4sAU2dQ6xStJDoJgE)

## 7. HTTP

#### npm install angular2-in-memory-web-api

![](https://api.monosnap.com/rpc/file/download?id=NwFlyRbceniTxkTuikcSSrGPZpYmXz)

#### simulate the web api

![](https://api.monosnap.com/rpc/file/download?id=s4auCvXDK9STSMozcCEynkIxwe9Wrc)

- add InMemoryWebApiModule.forRoot(InMemoryDataService) to AppModule

![](https://api.monosnap.com/rpc/file/download?id=3Ct50UAJsQL4dwkvz8135dzG453p6F)

- implement getHeroes using mock web api
- remove mock-heroes.ts

#### Get hero by id

![](https://api.monosnap.com/rpc/file/download?id=PIOAM0h5nhWaWUDVxwk8VakSFdygjx)

- hero.service.ts

![](https://api.monosnap.com/rpc/file/download?id=6GrSPkGTu8oGpr32LDy1n90ZY60fxa)

- in-memory-data.service.ts

#### Updating hero details

![](https://api.monosnap.com/rpc/file/download?id=oOUOamX2nAh2dxNEEXieII3uq5VqQU)

![](https://api.monosnap.com/rpc/file/download?id=i2EVikd6BqmVGYEwMJpZBPU0I8HW77)

#### add heroes

![](https://api.monosnap.com/rpc/file/download?id=RqazP0eg6TH5i87bvONgcisjLWifSJ)

![](https://api.monosnap.com/rpc/file/download?id=oWky6ED9eqzCGB1hkfVbq6Z7u48xpB)

![](https://api.monosnap.com/rpc/file/download?id=2uXsCCYotG9Rtf9ZvtnrQN6Cq8Uys0)

#### delete hero

![](https://api.monosnap.com/rpc/file/download?id=539f4GfX4Nf9wS28arIL5ZODsbuLT3)

![](https://api.monosnap.com/rpc/file/download?id=4tmJpe6JcToxKEg8LuGxSp3DOY5xAH)

![](https://api.monosnap.com/rpc/file/download?id=6P4DyVp0fHy2OaQQnDngaGl4wHjD08)

#### add search compoment

![](https://api.monosnap.com/rpc/file/download?id=eGUOXU6nO8a7Ry8H9XcuXpcAhP0tl4)

![](https://api.monosnap.com/rpc/file/download?id=1TGNEWtiG3ZZ8XzWNYMYx1bUF1lMc3)

![](https://api.monosnap.com/rpc/file/download?id=eoumOk9J8r1lfhMsqrztAGp1LgxSoj)