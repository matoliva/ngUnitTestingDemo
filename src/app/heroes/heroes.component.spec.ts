import { HeroesComponent } from "./heroes.component";
import { Hero } from "../hero";
import { of } from "rxjs";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>
    let HEROES: Hero[];
    let mockHeroService;

    // Hero mock
    @Component({
        selector: 'app-hero',
        template: '<div></div>'
      })
      class FakeHeroComponent {
        @Input() hero: Hero;
        // @Output() delete = new EventEmitter();
    }
    
    beforeEach(() => {
        HEROES = [
            {id:1, name:'SpiderDude', strength: 8},
            {id:2, name:'Wonderful Woman', strength: 24},
            {id:3, name:'SuperDude', strength: 55}
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            providers: [{ provide: HeroService, useValue: mockHeroService }],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);

    });

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            fixture.componentInstance.heroes = HEROES;

            fixture.componentInstance.delete(HEROES[2]);

            expect(fixture.componentInstance.heroes.length).toBe(2);
        })

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            fixture.componentInstance.heroes = HEROES;

            fixture.componentInstance.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        }); 
    })

    describe('ngOnInit heroes', () => {
        it('should set heroes correctly from the service', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));
            fixture.detectChanges();
    
            expect(fixture.componentInstance.heroes.length).toBe(3);
        });
        it('should create one li for each hero', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));
            fixture.detectChanges();
    
            expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
        });
        
    })
})