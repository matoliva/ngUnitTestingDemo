import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>
    let mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    let HEROES;

    beforeEach(() => {
        HEROES = [
            {id:1, name:'SpiderDude', strength: 8},
            {id:2, name:'Wonderful Woman', strength: 24},
            {id:3, name:'SuperDude', strength: 55}
        ];

        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })
    it('should render the hero name in a anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        fixture.detectChanges(); // Realiza el binding entre el template y el ts.

        //Selecciono el tag a y verifico el texto
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });
});