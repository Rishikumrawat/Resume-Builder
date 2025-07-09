import { LightningElement, api, track } from 'lwc';

export default class PreviewResume extends LightningElement {
    @api personalInfo = {};
    @api summary = '';
    @api skills = [];
    @api workExperiences = [];
    @api educations = [];
}