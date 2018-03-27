﻿/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    AnalyticsService,
    AutocompleteComponent,
    CanDeactivateGuard,
    ClipboardService,
    ConfirmClickDirective,
    ControlErrorsComponent,
    CopyDirective,
    DatePipe,
    DateTimeEditorComponent,
    DayOfWeekPipe,
    DayPipe,
    DialogService,
    DialogRendererComponent,
    DisplayNamePipe,
    DropdownComponent,
    DurationPipe,
    FileDropDirective,
    FileSizePipe,
    FocusOnInitDirective,
    FromNowPipe,
    FullDateTimePipe,
    IgnoreScrollbarDirective,
    ImageSourceDirective,
    IndeterminateValueDirective,
    JscriptEditorComponent,
    JsonEditorComponent,
    KeysPipe,
    KNumberPipe,
    LocalStoreService,
    LowerCaseInputDirective,
    MessageBus,
    ModalTargetDirective,
    ModalViewDirective,
    MoneyPipe,
    MonthPipe,
    OnboardingService,
    OnboardingTooltipComponent,
    PanelContainerDirective,
    PanelComponent,
    ParentLinkDirective,
    PopupLinkDirective,
    ProgressBarComponent,
    ResourceLoaderService,
    RootViewDirective,
    RootViewService,
    ScrollActiveDirective,
    ShortcutComponent,
    ShortcutService,
    ShortDatePipe,
    ShortTimePipe,
    SliderComponent,
    SlugifyInputDirective,
    SortedDirective,
    StarsComponent,
    TagEditorComponent,
    TemplateWrapperDirective,
    TitleService,
    TitleComponent,
    ToggleComponent,
    TooltipComponent,
    UserReportComponent
} from './declarations';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AutocompleteComponent,
        ConfirmClickDirective,
        ControlErrorsComponent,
        CopyDirective,
        DateTimeEditorComponent,
        DatePipe,
        DayOfWeekPipe,
        DayPipe,
        DialogRendererComponent,
        DisplayNamePipe,
        DropdownComponent,
        DurationPipe,
        FileDropDirective,
        FileSizePipe,
        FocusOnInitDirective,
        FromNowPipe,
        FullDateTimePipe,
        IgnoreScrollbarDirective,
        ImageSourceDirective,
        IndeterminateValueDirective,
        JscriptEditorComponent,
        JsonEditorComponent,
        KeysPipe,
        KNumberPipe,
        LowerCaseInputDirective,
        ModalTargetDirective,
        ModalViewDirective,
        MoneyPipe,
        MonthPipe,
        OnboardingTooltipComponent,
        PanelContainerDirective,
        PanelComponent,
        ParentLinkDirective,
        PopupLinkDirective,
        ProgressBarComponent,
        RootViewDirective,
        ScrollActiveDirective,
        ShortcutComponent,
        ShortDatePipe,
        ShortTimePipe,
        SliderComponent,
        SlugifyInputDirective,
        SortedDirective,
        StarsComponent,
        TagEditorComponent,
        TemplateWrapperDirective,
        TitleComponent,
        ToggleComponent,
        TooltipComponent,
        UserReportComponent
    ],
    exports: [
        AutocompleteComponent,
        CommonModule,
        ConfirmClickDirective,
        ControlErrorsComponent,
        CopyDirective,
        DatePipe,
        DateTimeEditorComponent,
        DayOfWeekPipe,
        DayPipe,
        DialogRendererComponent,
        DisplayNamePipe,
        DropdownComponent,
        DurationPipe,
        FileDropDirective,
        FileSizePipe,
        FocusOnInitDirective,
        FormsModule,
        FromNowPipe,
        FullDateTimePipe,
        IgnoreScrollbarDirective,
        ImageSourceDirective,
        IndeterminateValueDirective,
        JscriptEditorComponent,
        JsonEditorComponent,
        KeysPipe,
        KNumberPipe,
        LowerCaseInputDirective,
        ModalTargetDirective,
        ModalViewDirective,
        MoneyPipe,
        MonthPipe,
        OnboardingTooltipComponent,
        PanelContainerDirective,
        PanelComponent,
        ParentLinkDirective,
        PopupLinkDirective,
        ProgressBarComponent,
        ReactiveFormsModule,
        RootViewDirective,
        ScrollActiveDirective,
        ShortcutComponent,
        ShortDatePipe,
        ShortTimePipe,
        SliderComponent,
        SlugifyInputDirective,
        SortedDirective,
        StarsComponent,
        TagEditorComponent,
        TemplateWrapperDirective,
        TitleComponent,
        ToggleComponent,
        TooltipComponent,
        UserReportComponent
    ]
})
export class SqxFrameworkModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SqxFrameworkModule,
            providers: [
                AnalyticsService,
                CanDeactivateGuard,
                ClipboardService,
                DialogService,
                LocalStoreService,
                MessageBus,
                OnboardingService,
                ResourceLoaderService,
                RootViewService,
                ShortcutService,
                TitleService
            ]
        };
    }
 }