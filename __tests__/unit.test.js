// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone Numbers
test('valid phone number 1', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number - incomplete', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('invalid phone number - no digits', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// Emails
test('valid email 1', () => {
  expect(isEmail('laura@gmail.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('cse@ucsd.edu')).toBe(true);
});

test('invalid email - missing extension', () => {
  expect(isEmail('yuting@gmail')).toBe(false);
});

test('invalid email - missing @', () => {
  expect(isEmail('cse.ucsd.edu')).toBe(false);
});

// Strong Passwords
test('valid strong password 1', () => {
  expect(isStrongPassword('a123bcd')).toBe(true);
});

test('valid strong password 2', () => {
  expect(isStrongPassword('a_12_3bcd_4')).toBe(true);
});

test('invalid password - too long', () => {
  expect(isStrongPassword('abcdefghi1234567890')).toBe(false);
});

test('invalid password - starts without character', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

// Dates
test('valid date 1', () => {
  expect(isDate('05/03/2026')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('5/3/2026')).toBe(true);
});

test('invalid date - 2 digit year', () => {
  expect(isDate('01/01/26')).toBe(false);
});

test('invalid date - dots instead of slashes', () => {
  expect(isDate('01.01.2026')).toBe(false);
});

// Hex Colors
test('valid 6-digit hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid 3-digit hex color', () => {
  expect(isHexColor('#ABC')).toBe(true);
});

test('invalid hex color - too long', () => {
  expect(isHexColor('#1234567')).toBe(false);
});

test('invalid hex color - invalid characters', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});
